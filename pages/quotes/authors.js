import fetch from 'isomorphic-unfetch'
import React from "react";
import array_chunk_to_3_groups from '../../lib/array_chunk_to_3_groups';
import {Link} from '../../routes';
import Error from 'next/error';
import isAuthorListingPage from '../../lib/isAuthorListingPage';
import isAuthorPage from '../../lib/isAuthorPage';
import Quotes from '../../components/Quotes';
import DocumentTitle from 'react-document-title'
import Head from 'next/head';

class Authors extends React.Component {

  static async getInitialProps({ query }) {
    if (isAuthorListingPage(query)) {
      const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/authors/' + Object.values(query).map(x => encodeURI(x)).join('/'));
      let data = await res.json();
      data = array_chunk_to_3_groups(Array.from(data));
      return { data: data, query: query }
    }
    else if (isAuthorPage(query)) {
      const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/author-quotes/' + Object.values(query).map(x => encodeURI(x)).join('/'));
      const data = await res.json();
      return { data: data, query: query }
    }
  }

  render() {
    if (isAuthorListingPage(this.props.query) && this.props.data.length > 0) {
      return (
        <div>
          <Head>
            <title>Autori kategooria: {this.props.query.author_name}</title>
            <meta name="robots" content="noindex" />
          </Head>
          <DocumentTitle>
            <h1>Autori kategooria: {this.props.query.author_name}</h1>
          </DocumentTitle>
          <div className="author-tag-listing">
            <div className="author-tag-listing-inner">
              {this.props.data.map((group, index) => {
                return (
                  <ul className={'column column-' + index} key={index}>
                    {group.map(item => (
                        <li key={item.quote_author_nid}>
                          <Link route={'/tsitaadid/autorid/' + item.quote_author_urlfriendly_name}>
                            <a dangerouslySetInnerHTML={{__html: item.author_name_formated}}></a>
                          </Link>
                        </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      )
    }
    else if (isAuthorPage(this.props.query) && this.props.data.length > 0) {
      return (
        <div>
          <Quotes quotes={this.props.data} />
        </div>
      );
    }
    else {
      return (
        <Error statusCode={404} />
      );
    }

  }
}

export default Authors
