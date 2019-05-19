import fetch from 'isomorphic-unfetch'
import Quotes from '../components/Quotes';
import React from "react";

const LatestQuotes = props => (
  <div>
    <h1>Viimati lisatud tsitaadid</h1>
    <Quotes quotes={props.quotes} />
  </div>
);

LatestQuotes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/latest-quotes');
  const data = await res.json();
  return { quotes: data }
};

export default LatestQuotes
