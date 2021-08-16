import {COUNTRIES_URL, UNSPLASH_API_URL, UNSPLASH_KEY} from '../constants';
import fetch from '../../utils/fetch';

const APIService = {
  fetchCounties() {
    let url = new URL(`${COUNTRIES_URL}/capital`);
    return fetch(url, 'get');
  },
  searchPhotos(value) {
    let url = new URL(`${UNSPLASH_API_URL}/search/photos`);
    url.search = new URLSearchParams({
      orientation: 'landscape',
    }).toString();

    return fetch(url, 'get', {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    });
  },
};

export default APIService;
