import React, { Component } from 'react';
import Quote from './Quote';
import Pagination from './Pagination';

const Quotes = props => (
  <div>
    {props.quotes.map((quote, i) => (
      <Quote quote={quote} key={i} i={i}></Quote>
    ))}
    <Pagination />
  </div>
);

export default Quotes;
