import fetch from 'isomorphic-unfetch'
import Quotes from '../../components/Quotes';

const Topics = ({ name }) => (
    <div>
      <h1>{name}</h1>
      <p>teemad!</p>
    </div>
)

Topics.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Topics
