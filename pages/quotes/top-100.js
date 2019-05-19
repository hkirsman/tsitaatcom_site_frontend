import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import React from "react";

const Top100Quotes = props => (
  <div>
    <h1>Top 100</h1>
    <Quotes quotes={props.quotes} />
  </div>
);

Top100Quotes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/top-100-quotes');
  const data = await res.json();
  return { quotes: data }
};

export default Top100Quotes