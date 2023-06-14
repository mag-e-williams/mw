import Parser from 'rss-parser';
import {
  GoodreadsItem,
  GoodreadsFeed,
  GoodreadsReviewContent,
} from 'api/types/goodreads/GoodreadsFeed';

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
    dateAdded: new Date(dateAdded),
    shelves: shelves,
    review: review,
  };
};

export async function fetchRecentlyRead(): Promise<GoodreadsFeed> {
  const parser: Parser<GoodreadsFeed, GoodreadsItem> = new Parser();
  const rss_feed = await parser.parseURL(LETTERBOXD_RSS_FEED);
  const feed_items = rss_feed.items.map((item) => {
    return {
      ...item,
      content: parsedContent(item.content as string),
    };
  });

  console.log(feed_items);
  return rss_feed;
}
