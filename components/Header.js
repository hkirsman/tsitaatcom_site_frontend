import ActiveLink from '../components/ActiveLink';
import NavContentIndex from '../components/NavContentIndex';
import Logo from '../components/Logo';
import React, {Component} from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Script from 'react-load-script'

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
              <li className="leaf">
                <div className="block-search block-search--header-top">
                  <Script async url="https://cse.google.com/cse.js?cx=011181835781346626771:epdp_edxg1o" />
                  <div className="gcse-searchbox" data-gname="quotesearch1"></div>
                </div>
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
            <Logo/>
          </div>

          <NavContentIndex
            navContentIndex={this.props.navContentIndex}
            query={this.props.query}
            author_last_name={this.props.author_last_name}
            />

          <div className="block-search block-search--front">
            <div className="gcse-searchbox" data-gname="quotesearch2"></div>
          </div>

        </div>
      </header>
    )
  }
}

export default Header;
