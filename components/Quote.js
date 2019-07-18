import React, { Component } from 'react';
import { endpoint } from '../config';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {Link} from '../routes';

class Quote extends Component {
  static defaultProps = {
    hide_author_name: false,
    hide_author_profession: false,
  };

  /**
   * Check if vote has been cast.
   *
   * Initially check from cookie, but if state is initialized, then use that.
   */
  isVoted = function() {
    const nid = this.props.quote.quote_nid;
    const cookie_name = 'Drupal_tsitaatcom_vote_' + nid;
    if (typeof this.state !== 'undefined' && typeof this.state.voted !== 'undefined') {
      return this.state.voted;
    }
    else {
      return this.props.cookies[cookie_name] === 'voted';
    }
  };

  state = {
    quote_vote: parseInt(this.props.quote.quote_rank),
    voted: this.isVoted(),
  };

  /**
   * Voting for up and down.
   */
  vote = async function(vote) {
    if (this.isVoted()) {
      alert('Ei saa rohkem antud tsitaadi poolt hääletada.');
      return;
    }

    const nid = this.props.quote.quote_nid;
    const res = await fetch(endpoint + '/tsitaatcom_json/vote/' + nid + '/' + vote);

    const cookie_name = 'Drupal_tsitaatcom_vote_' + nid;

    setCookie({}, cookie_name, 'voted', {
      maxAge: 3600,
      path: '/',
    });

    if (vote === 'up') {
      this.setState({quote_vote: this.state.quote_vote + 1});
    }
    else if (vote === 'down') {
      this.setState({quote_vote: this.state.quote_vote - 1});
    }

    this.setState({voted: true});
  };

  handleVoteUp = async e => {
    e.preventDefault();
    return this.vote('up');
  };

  handleVoteDown = async e => {
    e.preventDefault();
    return this.vote('down');
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
              <div className={'vote' + (this.state.voted ? ' is-voted': '')} id={'vote-' + this.props.quote.quote_nid}>
                <a className="vote-up sr-only" href="#" onClick={this.handleVoteUp}>Hääleta üles</a>
                <a className="vote-down sr-only" href="#" onClick={this.handleVoteDown}>Hääleta alla</a>
                <div className="vote-current">{this.state.quote_vote}</div>
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
            <li className="username">{this.props.quote.username}</li>
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
