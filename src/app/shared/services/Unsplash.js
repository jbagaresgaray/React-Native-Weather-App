import axios from 'axios';
import {environment} from '../../../environments/environment';

export const getPhotoByCityName = (cityName, orientation) => {
  return axios.get(
    environment.unsplashURL +
      'search/photos?query=' +
      cityName +
      '&page1=' +
      environment.openWeatherAPI +
      '&orientation=' +
      orientation +
      '&client_id=' +
      environment.UnSplashKey,
  );
};
