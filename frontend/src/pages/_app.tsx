import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SearchQueryProvider } from '../context/SearchQueryContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SearchQueryProvider>
        <Component {...pageProps} />
      </SearchQueryProvider>
    </ChakraProvider>
  );
}
export default MyApp;
