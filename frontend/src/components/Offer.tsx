import Image from 'next/image';
import { Flex, Box, Badge, Link } from '@chakra-ui/layout';
import { OfferProps } from '../modules/home/interface';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { generateRandomBadgeColor } from '../utils/randomBadgeColors';
import { isWeekFromCurrentDate } from '../utils/date';
import { DEFAULT_IMAGE } from '../constants/defaultImage';

const Offer = ({ offer }: { offer: OfferProps }) => {
  return (
    <Flex flexDir="column" width={['100vw', '100vw', 'auto']}>
      <Box borderWidth="1px" borderRadius="md" py={4}>
        <Flex justifyContent="center">
          <Image
            width="100%"
            height="100%"
            src={offer.companyLogo ? offer.companyLogo : DEFAULT_IMAGE}
            alt={offer.companyName}
          />
        </Flex>
        <Box p="6">
          <Flex>
            {isWeekFromCurrentDate(offer.publishedAt) ? (
              <Badge borderRadius="full" px="2" colorScheme="teal" mr={1}>
                New
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" colorScheme="gray" mr={1}>
                {formatDistanceToNow(parseISO(offer.publishedAt), {
                  addSuffix: true,
                })}
              </Badge>
            )}
            <Box display={['none', 'none', 'flex']}>
              {offer.skills.slice(0, 2).map((skill, idx) => (
                <Badge
                  key={idx}
                  borderRadius="full"
                  px="2"
                  colorScheme={generateRandomBadgeColor()}
                  mr={1}
                >
                  {skill.name.length > 10
                    ? `${skill.name.substring(0, 10)}...`
                    : skill.name}
                </Badge>
              ))}
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml={['0', '2']}
            >
              {offer.city} &bull; {offer.street}
            </Box>
          </Flex>

          <Box
            my="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            fontSize={['lg', 'xl']}
          >
            {offer.title} |{' '}
            <Link
              href={offer.companyUrl}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {offer.companyName}
            </Link>
          </Box>
          {offer.salaryFrom && offer.salaryTo && (
            <Box fontSize={['xl', '3xl']}>
              {offer.salaryFrom} - {offer.salaryTo}
              &nbsp;{offer.salaryCurrency}
            </Box>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default Offer;
