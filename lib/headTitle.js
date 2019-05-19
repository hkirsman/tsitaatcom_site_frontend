import { siteTitle } from '../config';

/**
 * Common format for the title in head section.
 *
 * @todo: add site_title so the actual title would contain tsitaat.com in the end.
 */
function headTitle(page_title) {
  return page_title + (page_title.length > 0 ? ' - ' : '') + siteTitle;
}

export default headTitle;
