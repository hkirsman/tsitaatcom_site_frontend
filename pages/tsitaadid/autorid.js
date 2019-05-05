import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';
import React from "react";

const Authors = props => {
  if (typeof props.slug !== 'undefined' && props.slug.length === 1) {
    return (
      <div class="author-tag-listing normal-content">
        <div class="author-tag-listing-inner">
          <ul class="column column-0 todo">
          {props.data.map(item => (
            <li dangerouslySetInnerHTML={ { __html: item.quote_author_link_rendered } }></li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
  else if (typeof props.slug !== 'undefined' && props.slug.length > 1) {
    return (
      <div>
        <Quotes quotes={props.data} />
      </div>
    );
  }
  else {
    return (
        <div></div>
    );
  }
};

Authors.getInitialProps = async ({ query }) => {
  // @todo: different types of data from one end-point? Seems not so good.
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/authors_by_first_char_of_last_name/' + query.slug);
  const data = await res.json();
  return { data: data, slug: query.slug }
};

export default Authors
