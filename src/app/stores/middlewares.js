import {createAsyncThunk} from '@reduxjs/toolkit';
import APIService from '../shared/services';

export const fetchCountries = createAsyncThunk(
  'app/fetchCountries',
  async () => {
    console.log('APIService.fetchCountries()');
    const response = await APIService.fetchCounties();
    return response.json();
  },
);
