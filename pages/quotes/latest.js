import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import React from "react";
import Head from 'next/head';
import headTitle from "../../lib/headTitle";

const Latest = props => (
  <div>
    <Head>
      <title>{headTitle('Viimati lisatud tsitaadid')}</title>
      <meta name="robots" content="noindex" />
    </Head>
    <h1>Viimati lisatud tsitaadid</h1>
    <Quotes quotes={props.quotes} cookies={props.cookies} pager={props.pager} />
  </div>
);

Latest.getInitialProps = async ({ query }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/latest-quotes' + (typeof query.page != 'undefined' ? '?page=' + query.page : ''));
  const data = await res.json();
  return { quotes: data.items, pager: data.pager, query: query }
};

export default Latest
