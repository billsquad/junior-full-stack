import { Box, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    2021{' '}
    <Link
      href="https://az-developer.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      <b>Adrian Zinko</b>
    </Link>
  </Box>
);

export default Footer;
