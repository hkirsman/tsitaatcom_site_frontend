import React, {Component} from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

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
        <Header
          navContentIndex={this.props.children.props.navContentIndex}
          query={this.props.children.props.query}
          author_last_name={this.getAuthorLastName()}
          />
        <div className="page">
          <div role="main" id="main-content" className="main-content">
            <div className="content-wrap">
              <div className="gcse-searchresults" data-gname="quotesearch"></div>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
