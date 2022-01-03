import { useState } from 'react';
import Icon from '@chakra-ui/icon';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { useSearchQuery } from '../hooks/useSearchQuery';

interface SearchBarProps {
  searchOffer: (query: string) => void;
}

export const SearchBar = ({ searchOffer }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      searchOffer(searchQuery!);
    }
  };

  const reset = () => {
    searchOffer('');
    (setSearchQuery as (query: string) => void)('');
  };

  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        {open ? <CloseIcon /> : <Search2Icon />}
      </Box>

      <Box
        display={{ base: open ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Flex flexDir="column" pos="relative" paddingTop="2">
          <Input
            placeholder="Search through offers..."
            value={searchQuery}
            w={300}
            focusBorderColor="gray.300"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              (setSearchQuery as (query: string) => void)(e.target.value)
            }
            onKeyPress={handleKeyPress}
          />
          {searchQuery !== '' && (
            <Icon
              as={CloseIcon}
              pos="absolute"
              cursor="pointer"
              right="5"
              top="5"
              zIndex="100"
              onClick={reset}
            />
          )}
          {searchQuery && (
            <Button
              onClick={() => searchOffer(searchQuery)}
              color="primary"
              variant="outlined"
            >
              Search
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SearchBar;
