import React, {Component} from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header navContentIndex={this.props.children.props.navContentIndex} />
        <div className="page">
          <div role="main" id="main-content" className="main-content">
            <div className="normal-content">
              <h1>todo: Tsitaat.com</h1>
              <p className="h1">todo: Viimati lisatud tsitaadid</p>
            </div>
            <div className="content-wrap">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
