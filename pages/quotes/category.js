import Error from 'next/error';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import headTitle from "../../lib/headTitle";
import Quotes from "../../components/Quotes";
import React from "react";
import { endpoint } from '../../config';
import {Link} from '../../routes';

class Category extends React.Component {

  static async getInitialProps({ query }) {
    const res = await fetch(endpoint + '/tsitaatcom_json/categories/' + Object.values(query).map(x => encodeURI(x)).join('/'));
    let data = await res.json();
    return { data: data, query: query }
  }

  render() {
    if (this.props.data.length > 1) {
      return (
        <div>
          <Head>
            <title>{headTitle(this.props.data[0].quote_category)}</title>
            <meta name="robots" content="noindex" />
          </Head>
          <h1>{this.props.data[0].quote_category.charAt(0).toUpperCase() + this.props.data[0].quote_category.slice(1)}</h1>
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

export default Category
