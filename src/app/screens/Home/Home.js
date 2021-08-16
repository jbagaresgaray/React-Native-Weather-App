import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';

import {fakeDataArr} from '../../utils';
import HomeView from './Home.view';
import {appSelectors} from '../../stores/slices';
import {fetchCountries} from '../../stores/middlewares';

const HomeScreen = () => {
  const fakeArr = fakeDataArr();
  const [currentTab, setCurrentTab] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isLoadingCapital = useSelector(appSelectors.isLoadingCapital);
  const CapitalsArr = useSelector(appSelectors.capitals);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const navigateDetails = (location) => {
    navigation.navigate('Details', {
      location: location,
    });
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const navigateSearch = () => {
    navigation.navigate('SearchModal');
  };

  const getProps = () => {
    return {
      fakeArr,
      CapitalsArr,
      isLoadingCapital,
      navigateDetails,
      toggleDrawer,
      navigateSearch,
    };
  };

  return <HomeView {...getProps()} />;
};

export default HomeScreen;
