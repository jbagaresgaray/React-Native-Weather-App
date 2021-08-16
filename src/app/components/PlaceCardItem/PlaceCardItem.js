import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../styles/Typography';
import Colors from '../../../styles/Colors';

import defaultImg from '../../../assets/demo.jpg';

export default class PlaceCardItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.cardViewContainer}>
          <ImageBackground
            source={defaultImg}
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
                <Text style={styles.weatherCardStatus}> Sunny</Text>
              </View>
              <View style={styles.weatherCardTemperatureView}>
                <Text style={styles.weatherCardStatus}>
                  {this.props.item.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

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
