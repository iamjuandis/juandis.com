import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';
//import '../assets/style/styles.css';
import Provider from '../components/provider';
import { GlobalStyles } from '../assets/style/global';

const MyPortfolio = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyPortfolio;
