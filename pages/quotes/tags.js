import fetch from 'isomorphic-unfetch'
import React from "react";
import array_chunk_to_3_groups from '../../lib/array_chunk_to_3_groups';
import {Link} from '../../routes';
import Error from 'next/error';
import Head from 'next/head';
import Quotes from "../../components/Quotes";
import { title } from '../../config';
import Title from '../../components/Title';
import headTitle from '../../lib/headTitle';

class Tags extends React.Component {

  static async getInitialProps({ query }) {
    const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/tags/' + Object.values(query).map(x => encodeURI(x)).join('/'));
    let data = await res.json();
    if (query.tag.length === 1) {
      data = array_chunk_to_3_groups(Array.from(data));
    }
    return { data: data, query: query }
  }

  render() {
    if (this.props.query.tag.length === 1) {
      return (
        <div>
          <Head>
            <title>{headTitle( 'Teema kategooria: ' + this.props.query.tag)}</title>
            <meta name="robots" content="noindex" />
          </Head>
          <h1>Teema kategooria: {this.props.query.tag}</h1>
          <div className="author-tag-listing">
            <div className="author-tag-listing-inner">
              {this.props.data.map((group, index) => {
                return (
                  <ul className={'column column-' + index} key={index}>
                    {group.map(item => (
                      <li key={item.quote_author_nid}>
                        <Link route={'/' + item.link}>
                          <a>{item.tag}</a>
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
    else if (this.props.query.tag.length > 1) {
      return (
        <div>
          <Head>
            <title>{headTitle(this.props.query.tag.charAt(0).toUpperCase() + this.props.query.tag.slice(1))}</title>
            <meta name="description"
                  content={'Tsitaadid ja ütlemised teemal ' + this.props.query.tag + '.'} />
          </Head>
          <h1>{this.props.query.tag.charAt(0).toUpperCase() + this.props.query.tag.slice(1)}</h1>
          <Quotes quotes={this.props.data} cookies={this.props.cookies} />
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

export default Tags
