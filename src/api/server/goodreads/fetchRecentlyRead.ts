/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReviewItem } from 'api/types/goodreads/GoodreadsFeed';

import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const LETTERBOXD_RSS_FEED = 'https://www.goodreads.com/review/list_rss/158756856?shelf=read';

export async function fetchRecentlyRead(): Promise<Array<ReviewItem> | []> {
  try {
    // Fetch the RSS feed
    const response = await axios.get(LETTERBOXD_RSS_FEED);
    const rssData = response.data;

    // Parse the XML data into JavaScript objects
    const parsedData = await parseStringPromise(rssData, {
      trim: true,
      explicitArray: false,
      ignoreAttrs: true,
    });

    // Access the relevant data from the parsed object
    const reviewItems = parsedData.rss.channel.item;

    // Iterate over the items and extract the desired fields
    const parsedItems: ReviewItem[] = reviewItems.map((rssItem: any) => {
      const { title } = rssItem;
      const { link } = rssItem;
      const reviewDate = rssItem.user_read_at;
      const rating = rssItem.user_rating;
      const author = rssItem.author_name;
      const imageUrl = rssItem.book_large_image_url;

      const contentString = rssItem.description;

      // Extracting book published year
      const publishedMatch = contentString.match(/book published: (\d+)<br\/>/);
      const year = publishedMatch ? parseInt(publishedMatch[1] as string, 10) : 0;

      return {
        title,
        link,
        reviewDate,
        rating,
        author,
        imageUrl,
        year,
      };
    });

    const sortedItems = parsedItems.sort((a, b) => {
      if (a.reviewDate === '' || new Date(b.reviewDate) > new Date(a.reviewDate)) return 1;
      if (b.reviewDate === '' || new Date(b.reviewDate) < new Date(a.reviewDate)) return -1;
      return -1;
    });
    return sortedItems;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching or parsing the Goodreads RSS feed:', error);
    return [];
  }
}
