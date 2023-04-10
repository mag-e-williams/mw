import { introContent } from 'api/types/mockData/IntroContent';
import { IntroContentType } from 'api/types/IntroContent';
/**
 * Fetches the text block corresponding to the introduction rich text
 * for the home page.
 */
export function fetchIntroContent(): IntroContentType {
  return introContent;
}
