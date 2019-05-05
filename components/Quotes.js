import React, { Component } from 'react';
import Quote from './Quote';

const Quotes = props => (
  <div>
    {props.quotes.map(quote => (
      <Quote quote={quote} key={quote.quote_nid}></Quote>
    ))}
  </div>
)

export default Quotes;
