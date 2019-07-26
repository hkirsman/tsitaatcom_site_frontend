import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import headTitle from "../../lib/headTitle";
import Quotes from '../../components/Quotes';
import React from "react";
import { endpoint } from '../../config';

class UserQuotes extends React.Component {

  static async getInitialProps({query}) {
    const res = await fetch(endpoint + '/tsitaatcom_json/user-quotes/' + query.uid + (typeof query.page != 'undefined' ? '?page=' + query.page : ''));
    const data = await res.json();
    return {quotes: data.items, pager: data.pager, query: query}
  }

  render() {
    const pageTitle = 'Kasutaja ' + this.props.quotes[0].username + ' lisatud tsitaadid';

    return (
      <div>
        <Head>
          <title>{headTitle(pageTitle)}</title>
          <meta name="robots" content="noindex"/>
        </Head>
        <h1>{pageTitle}</h1>
        <Quotes quotes={this.props.quotes} cookies={this.props.cookies}
                pager={this.props.pager}/>
      </div>
    )
  }
}

export default UserQuotes
