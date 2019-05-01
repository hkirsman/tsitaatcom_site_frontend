import Link from 'next/link';

const Home = props => (
  <div>
    <p>Tsitaadid!!!</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Home;
