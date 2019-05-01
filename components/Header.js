import ActiveLink from '../components/ActiveLink';
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

const Header = () => (
  <header role="banner">
    <div className="header-region-top">
      <nav id="block-system-user-menu" className="block block-system block-menu " role="navigation">
        <ul className="menu">
          <li className="first leaf active-trail">
            <ActiveLink href="/latest-quotes">
              <a>Viimati lisatud</a>
            </ActiveLink>
          </li>
          <li className="leaf top-100">
            <ActiveLink href="/tsitaadid/top-100-tsitaadid">
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
          <a href="/" title="Avaleht" rel="home">
            <img id="logo"
                 src="http://www.tsitaat.com/sites/all/themes/tsitaatcom_theme/logo.png"
                 alt="Avaleht" />
          </a>
        </figure>

      </div>


      <div id="block-tsitaatcom-tsitaatcom-content-index"
           className="block block-tsitaatcom ">


        <div className="header">
          <ul>
            <li><a href="#" className="active-item">Sildid</a></li>
            <li><a href="#">Autorid</a></li>
          </ul>
        </div>
        <div className="content">
          <div className="active-item">
            <ul>
              <li><a href="/tsitaadid/teemad/a">a</a></li>
              <li><a href="/tsitaadid/teemad/b">b</a></li>
              <li><a href="/tsitaadid/teemad/c">c</a></li>
              <li><a href="/tsitaadid/teemad/d">d</a></li>
              <li><a href="/tsitaadid/teemad/e">e</a></li>
              <li><a href="/tsitaadid/teemad/f">f</a></li>
              <li><a href="/tsitaadid/teemad/g">g</a></li>
              <li><a href="/tsitaadid/teemad/h">h</a></li>
              <li><a href="/tsitaadid/teemad/i">i</a></li>
              <li><a href="/tsitaadid/teemad/j">j</a></li>
              <li><a href="/tsitaadid/teemad/k">k</a></li>
              <li><a href="/tsitaadid/teemad/l">l</a></li>
              <li><a href="/tsitaadid/teemad/m">m</a></li>
              <li><a href="/tsitaadid/teemad/n">n</a></li>
              <li><a href="/tsitaadid/teemad/o">o</a></li>
              <li><a href="/tsitaadid/teemad/p">p</a></li>
              <li><a href="/tsitaadid/teemad/r">r</a></li>
              <li><a href="/tsitaadid/teemad/s">s</a></li>
              <li><a href="/tsitaadid/teemad/%C5%A1">š</a></li>
              <li><a href="/tsitaadid/teemad/t">t</a></li>
              <li><a href="/tsitaadid/teemad/u">u</a></li>
              <li><a href="/tsitaadid/teemad/v">v</a></li>
              <li><a href="/tsitaadid/teemad/%C3%B5">õ</a></li>
              <li><a href="/tsitaadid/teemad/%C3%A4">ä</a></li>
              <li><a href="/tsitaadid/teemad/%C3%B6">ö</a></li>
              <li><a href="/tsitaadid/teemad/%C3%BC">ü</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="/tsitaadid/autorid/a">a</a></li>
              <li><a href="/tsitaadid/autorid/b">b</a></li>
              <li><a href="/tsitaadid/autorid/c">c</a></li>
              <li><a href="/tsitaadid/autorid/d">d</a></li>
              <li><a href="/tsitaadid/autorid/e">e</a></li>
              <li><a href="/tsitaadid/autorid/f">f</a></li>
              <li><a href="/tsitaadid/autorid/g">g</a></li>
              <li><a href="/tsitaadid/autorid/h">h</a></li>
              <li><a href="/tsitaadid/autorid/i">i</a></li>
              <li><a href="/tsitaadid/autorid/j">j</a></li>
              <li><a href="/tsitaadid/autorid/k">k</a></li>
              <li><a href="/tsitaadid/autorid/l">l</a></li>
              <li><a href="/tsitaadid/autorid/m">m</a></li>
              <li><a href="/tsitaadid/autorid/n">n</a></li>
              <li><a href="/tsitaadid/autorid/o">o</a></li>
              <li><a href="/tsitaadid/autorid/p">p</a></li>
              <li><a href="/tsitaadid/autorid/q">q</a></li>
              <li><a href="/tsitaadid/autorid/r">r</a></li>
              <li><a href="/tsitaadid/autorid/s">s</a></li>
              <li><a href="/tsitaadid/autorid/%C5%A1">š</a></li>
              <li><a href="/tsitaadid/autorid/z">z</a></li>
              <li><a href="/tsitaadid/autorid/t">t</a></li>
              <li><a href="/tsitaadid/autorid/u">u</a></li>
              <li><a href="/tsitaadid/autorid/v">v</a></li>
              <li><a href="/tsitaadid/autorid/w">w</a></li>
              <li><a href="/tsitaadid/autorid/y">y</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="block-search-form" className="block block-search "
           role="search">


        <form className="google-cse" action="/latest-quotes" method="post"
              id="search-block-form" accept-charset="UTF-8">
          <h2 className="element-invisible">Otsinguvorm</h2>

          <div>
            <label className="element-invisible"
                   htmlFor="edit-search-block-form--2">Otsing</label>
            <input title="Sisesta märksõnad, mida soovid otsida."
                   placeholder="" type="text"
                   id="edit-search-block-form--2" name="search_block_form"
                   value="" size="30" maxLength="128"/>
          </div>
          <div className="form-actions form-wrapper" id="edit-actions--2">
            <input type="submit" id="edit-submit--2" name="op"
                   value="Otsing"/></div>
        </form>
      </div>

    </div>

  </header>
)

export default Header;
