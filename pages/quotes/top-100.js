import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import React from "react";
import Head from 'next/head';
import headTitle from "../../lib/headTitle";

const Top100Quotes = props => (
  <div>
    <Head>
      <title>{headTitle('Parimad tsitaadid')}</title>
      <meta name="description" content="Parimate tsitaatide nimekiri." />
    </Head>
    <h1>Top 100</h1>
    <Quotes quotes={props.quotes} cookies={props.cookies} />
  </div>
);

Top100Quotes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/top-100-quotes');
  const data = await res.json();
  return { quotes: data }
};

export default Top100Quotes
