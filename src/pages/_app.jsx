import Card from '../components/card/Card';
import Header from '../components/Header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Card />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
