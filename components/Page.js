import React, {Component} from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header navContentIndex={this.props.children.props.navContentIndex} />
        <div className="page">
          <div role="main" id="main-content" className="main-content">
            <div className="content-wrap">
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
