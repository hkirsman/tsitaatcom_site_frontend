import ActiveLink from '../components/ActiveLink';
import NavContentIndex from '../components/NavContentIndex';
import Logo from '../components/Logo';
import React, {Component} from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <header role="banner">
        <div className="header-region-top">
          <nav id="block-system-user-menu" className="block block-system block-menu " role="navigation">
            <ul className="menu">
              <li className="first leaf">
                <ActiveLink route="/tsitaadid/viimati-lisatud">
                  <a>Viimati lisatud</a>
                </ActiveLink>
              </li>
              <li className="leaf top-100">
                <ActiveLink route="/tsitaadid/top-100-tsitaadid">
                  <a>TOP 100</a>
                </ActiveLink>
              </li>
              <li className="last leaf login"><a
                href="/user?current=latest-quotes" title="" rel="nofollow">Logi
                sisse</a></li>
            </ul>
          </nav>

          <div id="block-user-login" className="block block-user ">


            <form action="/latest-quotes?destination=latest-quotes"
                  method="post" id="user-login-form">Sisselogimine on hetkel keelatud,
              sest uus kasutajaliides pole veel valmis. Võtame registreerunud
              kasutajatega ise ühendust.<br />
              Täname mõistva suhtumise eest!
            </form>
          </div>

        </div>

        <div className="header-region">
          <div className="siteinfo">
            <figure>
              <Logo/>
            </figure>

          </div>

          <NavContentIndex
            navContentIndex={this.props.navContentIndex}
            query={this.props.query}
            author_last_name={this.props.author_last_name}
            />

          <div id="block-search-form" className="block block-search " role="search">


            <form className="google-cse" action="/latest-quotes" method="post"
                  id="search-block-form" acceptCharset="UTF-8" onSubmit={this.handleSubmit}>
              <h2 className="element-invisible">Otsinguvorm</h2>

              <div>
                <label className="element-invisible"
                       htmlFor="edit-search-block-form--2">Otsing</label>
                <input title="Sisesta märksõnad, mida soovid otsida."
                       placeholder="" type="text"
                       id="edit-search-block-form--2" name="search_block_form"
                       size="30" maxLength="128"
                       value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="form-actions form-wrapper" id="edit-actions--2">
                <input type="submit" id="edit-submit--2" name="op" value="Otsing"/>
              </div>
            </form>
          </div>

        </div>

      </header>
    )
  }
}

export default Header;
