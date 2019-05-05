import React, { Component } from 'react';
import Quote from './Quote';
import Pagination from './Pagination';

const Quotes = props => (
  <div>
    {props.quotes.map(quote => (
      <Quote quote={quote} key={quote.quote_nid}></Quote>
    ))}
    <Pagination />
  </div>
);

export default Quotes;
