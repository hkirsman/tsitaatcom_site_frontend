import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import Error from 'next/error';
import React from "react";

const AuthorQuotes = props => {
  if (props.query.author_name.length > 1 && props.data.length > 0) {
    return (
      <div>
        <Quotes quotes={props.data} />
      </div>
    );
  }
  else {
    return (
        <Error statusCode={404} />
    );
  }
};

AuthorQuotes.getInitialProps = async ({ query }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/author-quotes/' + Object.values(query).join('/'));
  const data = await res.json();
  return { data: data, query: query }
};

export default AuthorQuotes;
