import { Flex } from '@chakra-ui/react';
import { OfferProps } from '../home/interface';
import Offer from '../../components/Offer';

export const OffersList = ({ offers }: { offers: OfferProps[] }) => {
  return (
    <Flex flexWrap="wrap" flexDir="column">
      {offers.map(offer => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </Flex>
  );
};
