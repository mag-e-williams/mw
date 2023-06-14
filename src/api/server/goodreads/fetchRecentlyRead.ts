import { GoodreadsItem, GoodreadsReviewContent } from 'api/types/goodreads/GoodreadsFeed';

import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const LETTERBOXD_RSS_FEED = 'https://www.goodreads.com/review/list_rss/158756856?shelf=read';

const parsedContent = (contentString: string): GoodreadsReviewContent => {
  // Extracting image source URL
  const imageLinkMatch = contentString.match(/src="(.*?)"/);
  const imageLink = imageLinkMatch ? (imageLinkMatch[1] as string) : '';

  // Extracting book link URL
  const bookLinkMatch = contentString.match(/href="(.*?)"/);
  const bookLink = bookLinkMatch ? (bookLinkMatch[1] as string) : '';

  // Extracting author
  const authorMatch = contentString.match(/author: (.+)<br\/>/);
  const author = authorMatch ? (authorMatch[1] as string) : '';

  // Extracting name
  const nameMatch = contentString.match(/name: (.+)<br\/>/);
  const name = nameMatch ? (nameMatch[1] as string) : '';

  // Extracting average rating
  const ratingMatch = contentString.match(/average rating: (.+)<br\/>/);
  const rating = ratingMatch ? parseFloat(ratingMatch[1] as string) : 0;

  // Extracting book published year
  const publishedMatch = contentString.match(/book published: (\d+)<br\/>/);
  const publishedYear = publishedMatch ? parseInt(publishedMatch[1] as string) : 0;

  // Extracting rating
  const userRatingMatch = contentString.match(/rating: (\d+)<br\/>/);
  const userRating = userRatingMatch ? parseInt(userRatingMatch[1] as string) : 0;

  // Extracting date added
  const dateAddedMatch = contentString.match(/date added: ([\d/]+)<br\/>/);
  const dateAdded = dateAddedMatch ? (dateAddedMatch[1] as string) : '';

  // Extracting shelves
  const shelvesMatch = contentString.match(/shelves: (.+)<br\/>/);
  const shelves = shelvesMatch ? (shelvesMatch[1] as string) : '';

  // Extracting review
  const reviewMatch = contentString.match(/review: (.+)<br\/>/);
  const review = reviewMatch ? (reviewMatch[1] as string) : '';

  return {
    bookUrl: bookLink,
    imgUrl: imageLink,
    author: author,
    name: name,
    averageRating: rating,
    bookPublishedYear: publishedYear,
    userRating: userRating,
    dateAdded: dateAdded,
    shelves: shelves,
    review: review,
  };
};

export async function fetchRecentlyRead(): Promise<Array<GoodreadsItem> | []> {
  try {
    // Fetch the RSS feed
    const response = await axios.get(LETTERBOXD_RSS_FEED);
    const rssData = response.data;
    console.log(rssData);
    // Parse the XML data into JavaScript objects
    const parsedData = await parseStringPromise(rssData, {
      trim: true,
      explicitArray: false,
      ignoreAttrs: true,
    });

    // Access the relevant data from the parsed object
    const { rss } = parsedData;
    const { channel } = rss;
    const { item } = channel;

    // Iterate over the items and extract the desired fields
    const parsedItems: GoodreadsItem[] = item.map((rssItem: any) => {
      const title = rssItem.title;
      const bookId = rssItem.book_id;
      const userRating = rssItem.user_rating;
      const userReadAt = rssItem.user_read_at;
      const link = rssItem.link;
      const author = rssItem.author_name;
      const bookImgUrl = rssItem.book_image_url;
      const bookSmallImgUrl = rssItem.book_small_image_url;
      const bookMediumImgUrl = rssItem.book_medium_image_url;
      const bookLargeImgUrl = rssItem.book_large_image_url;
      const bookDescription = rssItem.book_description;

      const content = parsedContent(rssItem.description);

      return {
        title: title,
        bookId: bookId,
        bookDescription: bookDescription,
        bookImgUrl: bookImgUrl,
        bookSmallImgUrl: bookSmallImgUrl,
        bookMediumImgUrl: bookMediumImgUrl,
        bookLargeImgUrl: bookLargeImgUrl,
        userRating: userRating,
        userReadAt: userReadAt,
        link: link,
        author: author,
        bookContent: content,
      };
    });

    return parsedItems.sort((a, b) => {
      const valueA = new Date(a.userReadAt);
      const valueB = new Date(b.userReadAt);

      if (valueA < valueB) {
        return 1;
      }
      if (valueA > valueB) {
        return -1;
      }
      return 0;
    });
  } catch (error) {
    console.error('Error fetching or parsing the Goodreads RSS feed:', error);
    return [];
  }
}
