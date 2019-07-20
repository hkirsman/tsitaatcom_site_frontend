import React, { Component } from 'react';
import {Link} from '../routes';

class NavContentIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavContentIndexTopics: true,
      showNavContentIndexAuthors: false,
    };
  }

  openTopicsIndex = e => {
    this.setState({showNavContentIndexTopics: true});
    this.setState({showNavContentIndexAuthors: false});
  };

  openAuthorIndex = e => {
    this.setState({showNavContentIndexTopics: false});
    this.setState({showNavContentIndexAuthors: true});
  };

  getAuthorLastNameFirstChar = function() {
    if (typeof this.props.query.author_name === 'undefined') {
      return '';
    }

    if (this.props.query.author_name.length === 1) {
      return this.props.query.author_name;
    }

    if (this.props.query.author_name.length > 1) {
      return this.props.author_last_name.toLowerCase()[0];
    }

    return '';
  };

  getTagFirstChar = function() {
    if (typeof this.props.query.tag !== 'undefined') {
      return this.props.query.tag.toLowerCase()[0];
    }

    return '';
  };

  static defaultProps = {
    query: {},
  };

  render() {
    return (
      <div id="block-tsitaatcom-tsitaatcom-content-index" className="block block-tsitaatcom ">
        <div className="header">
          <ul>
            <li><a onClick={this.openTopicsIndex} href="#" className={this.state.showNavContentIndexTopics ? 'active-item': null}>Märksõnad</a></li>
            <li><a onClick={this.openAuthorIndex} href="#" className={this.state.showNavContentIndexAuthors ? 'active-item': null}>Autorid</a></li>
          </ul>
        </div>
        <div className="content">
          <div className={this.state.showNavContentIndexTopics ? 'active-item': null}>
            <ul>
              {this.props.navContentIndex.tags.map((item, id) => (
                <li key={'tags' + id}>
                  <Link route={'/' + item.href}>
                    <a className={this.getTagFirstChar() === item.title ? 'active-item' : null}>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={this.state.showNavContentIndexAuthors ? 'active-item': null}>
            <ul>
              {this.props.navContentIndex.authors.map((item, id) => (
                <li key={'authors' + id}>
                  <Link route={'/' + item.href}>
                    <a className={this.getAuthorLastNameFirstChar() === item.title ? 'active-item' : null}>{item.title}</a>
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
