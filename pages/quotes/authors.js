import fetch from 'isomorphic-unfetch'
import React from "react";
import array_chunk_to_3_groups from '../../lib/array_chunk_to_3_groups';
import Error from 'next/error';
import Link from 'next/link';

const Authors = props => {
  if (props.query[0].length === 1) {
    return (
      <div className="author-tag-listing">
        <div className="author-tag-listing-inner">
          {props.data.map((group, index) => {
            return (
              <ul className={'column column-' + index} key={index}>
                {group.map(item => (
                  <li key={item.quote_author_nid} >
                    <Link href={'/tsitaadid/autorid/' + item.quote_author_urlfriendly_name}>
                      <a dangerouslySetInnerHTML={{__html: item.author_name_formated}}></a>
                    </Link>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
};

Authors.getInitialProps = async ({ query }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/authors/' + Object.values(query).join('/'));
  let data = await res.json();
  data = array_chunk_to_3_groups(Array.from(data));
  return { data: data, query: query }
};

export default Authors
