import fetch from 'isomorphic-unfetch'
import Quotes from '../components/Quotes';

const LatestQuotes = props => (
  <Quotes quotes={props.quotes} />
);

LatestQuotes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/latest-quotes');
  const data = await res.json();
  return { quotes: data }
};

export default LatestQuotes
