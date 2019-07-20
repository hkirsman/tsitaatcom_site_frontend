import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import { endpoint } from '../config';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {Link} from '../routes';

class Quote extends Component {
  static defaultProps = {
    hide_author_image: false,
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

  /**
   * Get translation event that uses simple alert() to show the translation.
   */
  handleTranslation = async e => {
    e.preventDefault();
    const nid = e.target.dataset.nid;
    const lang = e.target.dataset.lang;
    if (typeof nid !== 'undefined' && typeof lang !== 'undefined') {
      const res = await fetch(endpoint + '/tsitaatcom_json/translation/' + nid + '/' + lang);
      let data = await res.json();
      alert(data.quote);
    }
  };

  render() {
    return (
      <div id={'quote-' + this.props.quote.quote_nid}
           className={'quote-container ' + (this.props.i % 2 ? 'even' : 'odd')}>
        <div className="quote-container-inner">
          <div className="quote">
            <div className="group-left">
              {
                !this.props.hide_author_image ?
                  <p className="quote-image">
                    <a href={this.props.quote.quote_author_link}>
                      {
                        typeof this.props.quote.author_portrait_url !== 'undefined' ?
                          <img className="thumb" src={this.props.quote.author_portrait_url} alt="" />
                          : null
                      }

                    </a>
                  </p>
                  : null
              }
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
            {
              this.props.quote.quote_translation_links_rendered.length > 15 ?
                <li className="translations" onClick={this.handleTranslation}
                    dangerouslySetInnerHTML={{__html: this.props.quote.quote_translation_links_rendered}}></li>
                : null
            }
            {this.props.quote.tag_links.length > 0 ? (
              <li className="tags">
                {this.props.quote.tag_links.map((tag, i) => (
                  <Link route={'/tsitaadid/teemad/' + tag.machine_name} key={i}>
                    <a>{tag.name}</a>
                  </Link>
                ))}
              </li>
            ) : <li className="tags">Märksõnad puuduvad</li>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Quote;
