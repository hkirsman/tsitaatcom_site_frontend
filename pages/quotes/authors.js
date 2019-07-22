import array_chunk_to_3_groups from '../../lib/array_chunk_to_3_groups';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import headTitle from "../../lib/headTitle";
import isAuthorListingPage from '../../lib/isAuthorListingPage';
import isAuthorPage from '../../lib/isAuthorPage';
import Quotes from '../../components/Quotes';
import React from "react";
import { endpoint } from '../../config';
import {Link} from '../../routes';

class Authors extends React.Component {

  static async getInitialProps({ query }) {
    const query_to_string = Object.values(query).map(x => encodeURI(x)).join('/');
    if (isAuthorListingPage(query)) {
      const res = await fetch(endpoint + '/tsitaatcom_json/authors/' + query_to_string);
      let data = await res.json();
      data.items = array_chunk_to_3_groups(Array.from(data.items));
      return { data: data.items, query: query }
    }
    else if (isAuthorPage(query)) {
      const res = await fetch(endpoint + '/tsitaatcom_json/author-quotes/' + query_to_string + (typeof query.page != 'undefined' ? '?page=' + query.page : ''));
      const data = await res.json();
      return { data: data.items, pager: data.pager, query: query }
    }
  }

  render() {
    if (isAuthorListingPage(this.props.query) && this.props.data.length > 0) {
      return (
        <div>
          <Head>
            <title>{headTitle('Autori kategooria: ' + this.props.query.author_name)}</title>
            <meta name="robots" content="noindex" />
          </Head>

          <h1>Autori kategooria: {this.props.query.author_name}</h1>
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
          <Head>
            <title>{headTitle(this.props.data[0].quote_author_name_without_bracket_content)}</title>
            <meta name="description"
              content={this.props.data[0].quote_author_name_without_bracket_content +
              ' tsitaadid ja ütlemised. ' +
              this.props.data[0].quote_author_name_without_bracket_content + ' '+
              this.props.data[0].quote_author_profession_rendered + '.'} />
            <meta property="og:description" content={this.props.data[0].quote} />
            <meta property="og:title" content={this.props.data[0].quote_author_name_without_bracket_content} />
            <meta property="og:image" content={this.props.data[0].author_portrait_url} />
          </Head>
          <div className="normal-content">
            <div className={"h1-width-author-portrait" +
                (typeof this.props.data[0].author_portrait_url !== 'undefined' ? ' h1-width-author-portrait--has-image' : '')}>
              {
                typeof this.props.data[0].author_portrait_url !== 'undefined' ?
                  <div className="h1-width-author-portrait__author-portrait">
                    <img src={this.props.data[0].author_portrait_url} alt="" className="h1-width-author-portrait__author-portrait-img" />
                  </div> : null
              }
              <div className="h1-width-author-portrait__h1-wrap">
                <div class="h1">
                  {
                    typeof this.props.query.quote_id !== 'undefined' ?
                      <h1>
                        <Link
                          route={'/tsitaadid/autorid/' + this.props.data[0].quote_author_urlfriendly_name}>
                          {this.props.data[0].quote_author_name_without_bracket_content}
                        </Link>
                      </h1>
                      :
                      <h1>{this.props.data[0].quote_author_name_without_bracket_content}</h1>
                  }
                  {
                    this.props.data[0].author_born_death ?
                      <span className="h1-width-author-portrait__born-death"
                            dangerouslySetInnerHTML={{__html: this.props.data[0].author_born_death }}></span>
                      : null
                  }
                </div>
                <p className="author_profession">{this.props.data[0].quote_author_profession_rendered}</p>
              </div>
            </div>
          </div>
          <Quotes
            quotes={this.props.data}
            hide_author_name={true}
            hide_author_image={true}
            hide_author_profession={true}
            cookies={this.props.cookies}
            pager={this.props.pager} />
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
