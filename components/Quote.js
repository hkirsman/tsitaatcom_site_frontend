import React, { Component } from 'react';
import {Link} from '../routes';

const Quote = props => (
  <div id={'quote-' + props.quote.quote_nid} className={'quote-container ' + (props.i % 2 ? 'even' : 'odd')}>
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
              <Link route={props.quote.quote_author_link}>
                <a dangerouslySetInnerHTML={ { __html: props.quote.quote_author_name_rendered } }></a>
              </Link>
              </p>
            <p className="author-profession">{props.quote.quote_author_profession_rendered}</p></div>
          <p className="quote">
            <Link route={'/tsitaadid/autorid/' + props.quote.quote_author_urlfriendly_name + '/' + props.quote.quote_nid}>
              <a dangerouslySetInnerHTML={ { __html: props.quote.quote } }></a>
            </Link>
          </p>
          <p className="quote-source" dangerouslySetInnerHTML={ { __html: props.quote.quote_source_rendered } }></p>
        </div>
      </div>
      <ul className="quote-info">
        <li className="username"><a href="/user/2/quotes">{props.quote.username}</a></li>
        <li className="translations" dangerouslySetInnerHTML={ { __html: props.quote.quote_translation_links_rendered } }></li>
        <li className="category">
          <Link route={'/tsitaadid/kategooriad/' + props.quote.quote_category_machine_name}>
            <a>{props.quote.quote_category}</a>
          </Link>
        </li>
        {props.quote.tag_links.length > 0 ? (
          <li className="tags">
            {props.quote.tag_links.map((tag, i) => (
              <Link route={'/tsitaadid/teemad/' + tag.machine_name}>
                <a>{tag.name}</a>
              </Link>
            ))}
          </li>
        ) : <li className="tags">Sildid puuduvad</li>
        }
      </ul>
    </div>
  </div>

)

export default Quote;
