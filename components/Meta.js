import Head from 'next/head';
import {withRouter} from "next/router";
import { siteDefaultFullTitle, baseurl } from "../config";

const Meta = (props) => (
  <Head>
    <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css' />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
    <title>{siteDefaultFullTitle}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="/static/public/img/favicons/favicon.ico" />
    <meta name="Generator" content="Drupal Mothership" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/public/img/favicons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/public/img/favicons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/public/img/favicons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" href="/static/public/img/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-startup-image" href="/static/public/img/favicons/apple-startup.png" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="cleartype" content="on" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <meta property="og:url" content={baseurl + props.router.asPath} />
    <meta property="og:type" content="website" />

    <link rel="stylesheet" href="/static/public/css/global.css" />
    {/*{*/}
      {/*typeof props.router.query.page !== 'undefined' && props.router.query.page > 0 ?*/}
        {/*<meta name="robots" content="noindex" />*/}
        {/*: null*/}
    {/*}*/}
  </Head>
);

const MetaWithRouter = withRouter(Meta);

export default MetaWithRouter;
