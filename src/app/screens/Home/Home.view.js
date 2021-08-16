import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Button, Icon, Text, View} from 'native-base';
import * as Animatable from 'react-native-animatable';
import globals from '../../../styles/Global';

import WeatherCardItem from '../../components/WeatherCardItem/WeatherCardItem';
import {useNavigation} from '@react-navigation/native';

const HomeView = ({
  fakeArr,
  isLoadingCapital,
  CapitalsArr,
  navigateDetails,
  toggleDrawer,
  navigateSearch,
}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button transparent onPress={navigateSearch}>
          <Icon
            name="search-outline"
            type="Ionicons"
            style={globals.appHomeButtom}
          />
        </Button>
      ),
      headerTitle: () => null,
      headerLeft: () => (
        <Button transparent>
          <Icon name="menu" style={globals.appHomeButtom} />
        </Button>
      ),
    });
  }, [navigation]);

  const AnimatedWeatherCardItem = (animation, {item}, index) => {
    if (item.capital === null || item.capital === '') return null;

    return (
      <Animatable.View animation={animation} useNativeDriver={true}>
        <WeatherCardItem
          title={item.capital}
          key={index}
          onPress={() => navigateDetails(item)}
        />
      </Animatable.View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView style={styles.customContent}>
          <View style={styles.headingView}>
            <Text style={globals.appTitle}>Weather</Text>
          </View>
          <FlatList
            style={styles.flatList}
            nestedScrollEnabled
            data={CapitalsArr.data}
            renderItem={(item, index) =>
              index % 2
                ? AnimatedWeatherCardItem('bounceInRight', item, index)
                : AnimatedWeatherCardItem('bounceInLeft', item, index)
            }
            keyExtractor={(item, index) => 'key' + index}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customContent: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#455B6314',
  },
  headingView: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingBottom: 18,
    backgroundColor: '#fff',
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default HomeView;
