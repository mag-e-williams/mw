/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// YIKES ^^

import axios, { AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';
import type { Review, ReviewQuery } from 'api/types/letterboxd/Review';
import { isReview } from 'api/parsers';
import { isEmpty } from 'helpers/isNotEmpty';

const LETTERBOXD_RSS_FEED = 'https://letterboxd.com/magoo_willems/rss/';

async function parseReview(item: ReviewQuery): Promise<Review> {
  const { description } = item;
  const parsedDescription = description
    ? await parseStringPromise(description, {
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: true,
      })
    : '';

  const parsedReview: Review = {
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    watchedDate: item['letterboxd:watchedDate'],
    rewatch: item['letterboxd:rewatch'],
    filmTitle: item['letterboxd:filmTitle'],
    filmYear: item['letterboxd:filmYear'],
    rating: item['letterboxd:memberRating'],
    img: parsedDescription.p.img.src,
    review: item.description
      .split('</p>')
      .filter((e) => !e.includes('img') && !isEmpty(e))
      .join()
      .replace('<p>', '')
      .trim(),
    creator: item['dc:creator'],
  };

  return parsedReview;
}

export async function fetchRecentlyReviewed(): Promise<Array<Review> | []> {
  return axios
    .get<AxiosResponse>(LETTERBOXD_RSS_FEED)
    .then(async (response) => {
      const { data } = response;
      const result = await parseStringPromise(data, {
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: true,
      });
      const items = result.rss.channel.item.map((item: ReviewQuery) => parseReview(item));
      return Promise.all(items)
        .then((results: Array<Review>) => results.filter(isReview) ?? [])
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
          return [];
        });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      return [];
    });
}
