import React from "react";
import fetch from 'isomorphic-unfetch';
import { endpoint } from '../config';

/**
 * Class to redirect /quote-id urls to long urls.
 *
 * For example /476 to /tsitaadid/autorid/albert_einstein/476
 */
class QuoteShortcut {
  static async getInitialProps(ctx) {
    const res = await fetch(endpoint + '/tsitaatcom_json/quote-long-url/' + ctx.query.quote_id);
    const data = await res.json();
    ctx.res.writeHead(302, { Location: data.quote_long_url })
    ctx.res.end()
  }
}

export default QuoteShortcut;
