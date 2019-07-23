import {Component} from "react";
import React from "react";
import TagCloud from '../components/TagCloud';
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
    const res = await fetch(endpoint + '/tsitaatcom_json/tag-cloud');
    let tags = await res.json();
    return { tags: tags }
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
      </div>
    )
  }
}

export default Home;
