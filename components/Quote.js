import React, { Component } from 'react';
import {Link} from '../routes';

class Quote extends Component {
  static defaultProps = {
    hide_author_name: false,
    hide_author_profession: false,
  };

  render() {
    return (
      <div id={'quote-' + this.props.quote.quote_nid}
           className={'quote-container ' + (this.props.i % 2 ? 'even' : 'odd')}>
        <div className="quote-container-inner">
          <div className="quote">
            <div className="group-left">
              <p className="quote-image"
                 dangerouslySetInnerHTML={{__html: this.props.quote.author_portrait}}></p>
              <div className="vote" id="vote-{this.props.quote.quote_nid}">
                <a className="vote-up sr-only" href="#"></a>
                <a className="vote-down sr-only" href="#"></a>
                <div className="vote-current">{this.props.quote.quote_rank}</div>
              </div>
            </div>
            <div className="group-right">
              {
                !this.props.hide_author_name && !this.props.hide_author_profession ? (
                  <div className="wrap--author-name--author-profession">
                    {
                      !this.props.hide_author_name
                        ? (
                          <p className="author-name">
                            <Link route={this.props.quote.quote_author_link}>
                              <a
                                dangerouslySetInnerHTML={{__html: this.props.quote.quote_author_name_rendered}}></a>
                            </Link>
                          </p>
                        ) : null
                    }
                    {
                      !this.props.hide_author_profession
                        ? (
                          <p
                            className="author-profession">{this.props.quote.quote_author_profession_rendered}</p>
                        ) : null
                    }
                  </div>
                ) : null
              }
              <p className="quote">
                <Link
                  route={'/tsitaadid/autorid/' + this.props.quote.quote_author_urlfriendly_name + '/' + this.props.quote.quote_nid}>
                  <a dangerouslySetInnerHTML={{__html: this.props.quote.quote}}></a>
                </Link>
              </p>
              <p className="quote-source"
                 dangerouslySetInnerHTML={{__html: this.props.quote.quote_source_rendered}}></p>
            </div>
          </div>
          <ul className="quote-info">
            <li className="username"><a
              href="/user/2/quotes">{this.props.quote.username}</a></li>
            <li className="translations"
                dangerouslySetInnerHTML={{__html: this.props.quote.quote_translation_links_rendered}}></li>
            <li className="category">
              <Link
                route={'/tsitaadid/kategooriad/' + this.props.quote.quote_category_machine_name}>
                <a>{this.props.quote.quote_category}</a>
              </Link>
            </li>
            {this.props.quote.tag_links.length > 0 ? (
              <li className="tags">
                {this.props.quote.tag_links.map((tag, i) => (
                  <Link route={'/tsitaadid/teemad/' + tag.machine_name} key={i}>
                    <a>{tag.name}</a>
                  </Link>
                ))}
              </li>
            ) : <li className="tags">Sildid puuduvad</li>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Quote;
