import App, { Container } from 'next/app';
import fetch from 'isomorphic-unfetch'
import nookies from 'nookies'
import Page from '../components/Page';
import ReactGA from 'react-ga'
import { endpoint } from '../config';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // @todo: is there any other way not to pull this data on ever page load?
    // if (!process.browser) {
      const res = await fetch(endpoint + '/tsitaatcom_json/nav-content-index');
      pageProps.navContentIndex = await res.json();
    // }

    // @todo: Other options where to add it?
    pageProps.cookies = nookies.get(ctx);

    // Google Analytics pageview client-side only, run on page changes, do not run on server (SSR)
    if (typeof(window) === "object") {
      ReactGA.pageview(ctx.asPath);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Client-side only, run once on mount.
    console.log('GA init');
    ReactGA.initialize('UA-4321409-1');
    console.log(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}

export default MyApp;
