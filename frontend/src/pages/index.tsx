import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../modules/footer/Footer';

const Home = dynamic(() => import('../modules/home/Home'));

const HomePage = () => (
  <>
    <Head>
      <title>Recruitment Task JustJoinIT</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <script
        defer
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      ></script>
    </Head>
    <Home />
    <footer>
      <Footer />
    </footer>
  </>
);

export default HomePage;
