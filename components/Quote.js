import React, { Component } from 'react';
import Link from 'next/link';

const Quote = props => (
  <div id="quote-{props.quote.quote_nid}" className="quote-container odd">
    <div className="quote-container-inner">
      <div className="quote">
        <div className="group-left">
          <p className="quote-image" dangerouslySetInnerHTML={ { __html: props.quote.author_portrait } }></p>
          <div className="vote" id="vote-{props.quote.quote_nid}">
            <a className="vote-up sr-only" href="#"></a>
            <a className="vote-down sr-only" href="#"></a>
            <div className="vote-current">{props.quote.quote_rank}</div>
          </div>
        </div>
        <div className="group-right">
          <div className="wrap--author-name--author-profession">
            <p className="author-name">
              <Link href={props.quote.quote_author_link}>
                <a dangerouslySetInnerHTML={ { __html: props.quote.quote_author_name_rendered } }></a>
              </Link>
              </p>
            <p className="author-profession">{props.quote.quote_author_profession_rendered}</p></div>
          <p className="quote">
            <Link href={'/tsitaadid/autorid/' + props.quote.quote_author_urlfriendly_name + '/' + props.quote.quote_nid}>
              <a dangerouslySetInnerHTML={ { __html: props.quote.quote } }></a>
            </Link>
          </p>
          <p className="quote-source" dangerouslySetInnerHTML={ { __html: props.quote.quote_source_rendered } }></p>
        </div>
      </div>
      <ul className="quote-info">
        <li className="username"><a href="/user/2/quotes">{props.quote.username}</a></li>
        <li className="translations">{props.quote.quote_translation_links_rendered}</li>
        <li className="category"><a href="/tsitaadid/kategooriad/kategooriata">{props.quote.quote_category}</a></li>
        <li className="tags" dangerouslySetInnerHTML={ { __html: props.quote.tags_rendered } }></li>
      </ul>
    </div>
  </div>

)

export default Quote;
