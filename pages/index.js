import {Component} from "react";
import React from "react";
import TagCloud from '../components/TagCloud';
import QuoteOfTheDay from '../components/QuoteOfTheDay'
import fetch from 'isomorphic-unfetch';
import { siteTitle, endpoint } from '../config';
import Head from 'next/head';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector("body").classList.add('front')
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove('front')
  }

  static async getInitialProps({ query }) {
    const res_tag_cloud = await fetch(endpoint + '/tsitaatcom_json/tag-cloud');
    const tags = await res_tag_cloud.json();

    const res_quote_of_the_day = await fetch(endpoint + '/tsitaatcom_json/quote-of-the-day');
    const quote_of_the_day = await res_quote_of_the_day.json();

    return { tags: tags, quote_of_the_day: quote_of_the_day.items }
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="description" content="Eesti keelsed tsitaadid ja mõtteterad." />
          <meta name="keywords" content="tsitaadid, aforismid, mõtteterad, tsitaat, aforism, mõttetera, vanasõnad, vanasõna" />
        </Head>
        <h1>{siteTitle}</h1>
        <TagCloud tags={this.props.tags} />
        <QuoteOfTheDay
          quote={this.props.quote_of_the_day}
          cookies={this.props.cookies} />
      </div>
    )
  }
}

export default Home;
