import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAtxasDjfoz_L55MzGpWtLbDY1MNBj4Ujk',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;
