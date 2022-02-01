//@ts-nocheck
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>Uber 2.0</title>
        <link rel="icon" href="/uber-logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
