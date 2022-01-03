import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import { DEFAULT_COORDS } from '../../constants/coordinates';
import { OfferProps } from '../home/interface';
import { mapProvider } from './mapProvider';

const Map = ({ offers }: { offers: OfferProps[] }) => {
  const CENTER = { lat: DEFAULT_COORDS.lat, lng: DEFAULT_COORDS.lng };
  const ZOOM_LEVEL = 6;

  return (
    <MapContainer
      center={CENTER}
      zoom={ZOOM_LEVEL}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution={mapProvider.tilelayer.attribution}
        url={mapProvider.tilelayer.url}
      />
      {offers.map((offer, idx) => (
        <Marker key={idx} position={[offer.lat, offer.lon]} riseOnHover={true}>
          <Tooltip>{offer.title}</Tooltip>
          <Popup>
            <Box>
              {offer.title} | {offer.companyName}{' '}
            </Box>
            <Box>
              {offer.city} {offer.street}
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
