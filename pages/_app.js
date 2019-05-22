import App, { Container } from 'next/app';
import Page from '../components/Page';
import fetch from 'isomorphic-unfetch'
import nookies from 'nookies'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // @todo: is there any other way not to pull this data on ever page load?
    // if (!process.browser) {
      const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/nav-content-index');
      pageProps.navContentIndex = await res.json();
    // }

    // @todo: Other options where to add it?
    pageProps.cookies = nookies.get(ctx);

    return { pageProps };
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
