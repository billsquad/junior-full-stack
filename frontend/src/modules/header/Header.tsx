import Link from 'next/link';
import { Flex, Heading } from '@chakra-ui/react';
import { SearchBar } from '../../components/SearchBar';

interface HeaderProps {
  searchOffer: (query: string) => void;
}

export const Header = ({ searchOffer }: HeaderProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="blue.700"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading
          as="h1"
          fontSize={['md', '3xl']}
          letterSpacing={['inherit', '-.1rem']}
        >
          <Link href="/">Recruitment Task JustJoinIT</Link>
        </Heading>
      </Flex>
      <SearchBar searchOffer={searchOffer} />
    </Flex>
  );
};
