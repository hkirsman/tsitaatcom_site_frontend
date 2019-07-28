import array_chunk_to_3_groups from '../../lib/array_chunk_to_3_groups';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import headTitle from '../../lib/headTitle';
import Quotes from "../../components/Quotes";
import React from "react";
import { endpoint, title } from '../../config';
import {Link} from '../../routes';

class Tags extends React.Component {

  static async getInitialProps({ query }) {
    const res = await fetch(endpoint + '/tsitaatcom_json/tags/' + encodeURI(query.tag) + (typeof query.page != 'undefined' ? '?page=' + query.page : ''));
    let data = await res.json();
    let items = data.items;
    if (query.tag.length === 1) {
      items = array_chunk_to_3_groups(Array.from(items));
    }
    return { data: items, pager: data.pager, query: query }
  }

  tagWithoutUnderscore() {
    return this.props.query.tag.replace('_', ' ');
  }

  render() {
    if (this.props.query.tag.length === 1) {
      return (
        <div>
          <Head>
            <title>{headTitle( 'Märksõnad: ' + this.tagWithoutUnderscore())}</title>
            <meta name="robots" content="noindex" />
          </Head>
          <h1>Märksõnad: {this.tagWithoutUnderscore()}</h1>
          <div className="author-tag-listing">
            <div className="author-tag-listing-inner">
              {this.props.data.map((group, col_index) => {
                return (
                  <ul className={'column column-' + col_index} key={col_index}>
                    {group.map((item, i) => (
                      <li key={i}>
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
            <title>{headTitle(this.tagWithoutUnderscore().charAt(0).toUpperCase() + this.tagWithoutUnderscore().slice(1))}</title>
            <meta name="description"
                  content={'Tsitaadid ja ütlemised teemal ' + this.tagWithoutUnderscore() + '.'} />
          </Head>
          <h1 className="element-invisible">Tsitaadid teemal {this.tagWithoutUnderscore()}</h1>
          <p class="h1">{this.tagWithoutUnderscore().charAt(0).toUpperCase() + this.tagWithoutUnderscore().slice(1)}</p>
          <Quotes quotes={this.props.data} cookies={this.props.cookies} pager={this.props.pager} />
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
