import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';

const Top100Quotes = props => (
    <Quotes quotes={props.quotes} />
);

Top100Quotes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://tsitaat.com.lndo.site/tsitaatcom_json/top-100-quotes');
  const data = await res.json();
  return { quotes: data }
};

export default Top100Quotes
