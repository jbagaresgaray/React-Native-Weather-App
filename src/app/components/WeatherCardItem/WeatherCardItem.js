import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import toLower from 'lodash-es/toLower';

import ImageBackground from '../ImageBackground';

import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../styles/Typography';
import Colors from '../../../styles/Colors';

import IconSun from '../../../assets/Icon-Sun.svg';
import IconRain from '../../../assets/Icon-Rain.svg';
import IconCloud from '../../../assets/Icon-Cloud.svg';
import IconFog from '../../../assets/Icon-Fog.svg';
import IconNight from '../../../assets/Icon-Night.svg';
import IconSunrise from '../../../assets/Icon-Sunrise.svg';
import IconSunset from '../../../assets/Icon-Sunset.svg';
import IconOvercast from '../../../assets/Icon-Overcast2.svg';
import IconClear from '../../../assets/Icon-Sun.svg';

import defaultImg from '../../../assets/landscape.jpg';

const WeatherCardItem = ({title, image, onPress}) => {
  const generateWeatherIcon = (weatherDescription) => {
    if (weatherDescription) {
      if (toLower(weatherDescription).indexOf('sunny') !== -1) {
        return <IconSun />;
      } else if (toLower(weatherDescription).indexOf('rain') !== -1) {
        return <IconRain />;
      } else if (toLower(weatherDescription).indexOf('cloud') !== -1) {
        return <IconCloud />;
      } else if (toLower(weatherDescription).indexOf('fog') !== -1) {
        return <IconFog />;
      } else if (toLower(weatherDescription).indexOf('night') !== -1) {
        return <IconNight />;
      } else if (toLower(weatherDescription).indexOf('sunrise') !== -1) {
        return <IconSunrise />;
      } else if (toLower(weatherDescription).indexOf('sunset') !== -1) {
        return <IconSunset />;
      } else if (toLower(weatherDescription).indexOf('overcast') !== -1) {
        return <IconOvercast />;
      } else if (toLower(weatherDescription).indexOf('clear') !== -1) {
        return <IconClear />;
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardViewContainer}>
        <ImageBackground
          source={image !== undefined ? {uri: image} : defaultImg}
          style={styles.bgImage}
          imageStyle={styles.bgImageStyle}>
          <LinearGradient
            colors={['#00000000', '#00000080']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}
          />
          <View style={styles.weatherCardContent}>
            <View style={styles.weatherCardStatusView}>
              {generateWeatherIcon('sunny')}
              <Text style={styles.weatherCardStatus}> Sunny</Text>
            </View>
            <View style={styles.weatherCardTemperatureView}>
              <Text style={styles.weatherCardTemperature}>37 &deg;</Text>
            </View>
            <View style={styles.weatherCardLocationView}>
              <Text style={styles.weatherCardStatus}>{title}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 12,
  },
  bgImageStyle: {
    borderRadius: 12,
  },
  cardViewContainer: {
    maxHeight: 140,
    height: 140,
    position: 'relative',
    margin: 8,
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 12,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  weatherCardContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 16,
  },
  weatherCardStatusView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  weatherCardStatus: {
    ...FONT_REGULAR,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.colorWhite,
  },
  weatherCardTemperatureView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  weatherCardTemperature: {
    ...FONT_SEMI_BOLD,
    fontSize: 42,
    lineHeight: 50,
    color: Colors.colorWhite,
  },
  weatherCardLocationView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 16,
    paddingRight: 16,
  },
});

export default WeatherCardItem;
