import {Component} from "react";
import React from "react";
import TagCloud from '../components/TagCloud';
import fetch from 'isomorphic-unfetch';
import { siteTitle } from '../config';

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
    const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/tag-cloud');
    let tags = await res.json();
    return { tags: tags }
  }

  render() {
    return (
      <div>
        <h1>{siteTitle}</h1>
        <TagCloud tags={this.props.tags} />
      </div>
    )
  }
}

export default Home;
