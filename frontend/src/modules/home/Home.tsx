import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { OfferProps } from './interface';
import { Header } from '../header/Header';
import { OffersList } from '../offers/OffersList';
import { baseUrl, fetchOffersApi } from '../../utils/fetchOffersApi';
const Map = dynamic(() => import('../map/Map'), {
  ssr: false,
});

const Home = () => {
  const [offers, setOffers] = useState<OfferProps[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOffersData();
  }, []);

  const searchOffer = async (query: string) => {
    if (query !== '') {
      setLoading(true);
      const offers = await fetchOffersApi(
        `${baseUrl}/offers?title=${query?.toLowerCase().replace(/ /g, '')}`,
      );
      setLoading(false);
      setOffers(offers);
    } else {
      fetchOffersData();
    }
  };

  const fetchOffersData = async () => {
    setLoading(true);
    const fetchedOffers = await fetchOffersApi(`${baseUrl}/offers`);
    setLoading(false);
    setOffers(fetchedOffers);
  };

  return (
    <Flex height="100%" flexDirection="column">
      <Header searchOffer={searchOffer} />
      <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box
          flexBasis={['100vw', '100vw', '600']}
          overflow="auto"
          overflowX="hidden"
          position="relative"
        >
          {loading && (
            <Spinner
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
              }}
              size="xl"
            />
          )}
          {!offers.length && !loading && (
            <Flex justifyContent="center" h="100%" align="center">
              <h1>There are no offers related to this query.</h1>
            </Flex>
          )}
          {offers.length ? <OffersList offers={offers} /> : null}
        </Box>
        <Box flex={1} display={['none', 'none', 'initial']}>
          <Map offers={offers} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
