import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import React from "react";
import Head from 'next/head';

const Tags = props => {
  return (
    <div>
      <Head>
        <title>Teema kategooria: {props.query[0]}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>{props.query[0]}</h1>
      <p>teemad!</p>
    </div>
  )
};

Tags.getInitialProps = async ({ query }) => {
  console.log(query);
  return { query: query }
};

export default Tags
