import React, { Component } from 'react';
import Link from 'next/link';

class NavContentIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavContentIndexTopics: true,
      showNavContentIndexAuthors: false
    }
  }

  openTopicsIndex = e => {
    this.setState({showNavContentIndexTopics: true});
    this.setState({showNavContentIndexAuthors: false});
  };

  openAuthorIndex = e => {
    this.setState({showNavContentIndexTopics: false});
    this.setState({showNavContentIndexAuthors: true});
  };

  render() {
    return (
      <div id="block-tsitaatcom-tsitaatcom-content-index" className="block block-tsitaatcom ">
        <div className="header">
          <ul>
            <li><a onClick={this.openTopicsIndex} href="#" className={this.state.showNavContentIndexTopics ? 'active-item': null}>Sildid</a></li>
            <li><a onClick={this.openAuthorIndex} href="#" className={this.state.showNavContentIndexAuthors ? 'active-item': null}>Autorid</a></li>
          </ul>
        </div>
        <div className="content">
          <div className={this.state.showNavContentIndexTopics ? 'active-item': null}>
            <ul>
              {this.props.navContentIndex.tags.map((item, id) => (
                <li key={'tags' + id}>
                  <Link href={'/' + item.href}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={this.state.showNavContentIndexAuthors ? 'active-item': null}>
            <ul>
              {this.props.navContentIndex.authors.map((item, id) => (
                <li key={'authors' + id}>
                  <Link href={'/' + item.href}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavContentIndex;
