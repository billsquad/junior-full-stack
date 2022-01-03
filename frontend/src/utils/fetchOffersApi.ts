import axios from 'axios';

export const baseUrl = 'http://localhost:3001';

export const fetchOffersApi = async (url: string) => {
  const { data } = await axios.get(url);

  return data;
};
