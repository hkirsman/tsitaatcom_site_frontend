import fetch from 'isomorphic-unfetch'
import React from "react";
import {Link} from '../../routes';
import Error from 'next/error';
import Head from 'next/head';
import Quotes from "../../components/Quotes";
import headTitle from "../../lib/headTitle";

class Category extends React.Component {

  static async getInitialProps({ query }) {
    const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/categories/' + Object.values(query).map(x => encodeURI(x)).join('/'));
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

export default Category
