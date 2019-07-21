import Footer from '../components/Footer';
import Header from '../components/Header';
import Meta from '../components/Meta';
import React, {Component} from 'react';
import Smartad from '../components/Smartad';

class Page extends Component {
  getAuthorLastName = function() {
    if (typeof this.props.children.props.data === 'undefined') {
      return '';
    }

    if (typeof this.props.children.props.data[0] === 'undefined') {
      return '';
    }

    if (typeof this.props.children.props.data[0].quote_author_lastname !== 'undefined') {
      return this.props.children.props.data[0].quote_author_lastname;
    }

    return '';
  };

  render() {
    return (
      <div>
        <Meta />
        <div className="header-page-wrap">
          <Header
            navContentIndex={this.props.children.props.navContentIndex}
            query={this.props.children.props.query}
            author_last_name={this.getAuthorLastName()}
          />
          <div className="page">
            <div role="main" id="main-content" className="main-content">
              <div className="content-wrap">
                <div className="gcse-searchresults" data-gname="quotesearch1" data-linkTarget="_self"></div>
                <div className="gcse-searchresults" data-gname="quotesearch2" data-linkTarget="_self"></div>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Smartad />
      </div>
    );
  }
}

export default Page;
