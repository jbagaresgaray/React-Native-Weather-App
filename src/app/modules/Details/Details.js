import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Icon,
  Text,
  List,
  ListItem,
  Body,
  Right,
} from 'native-base';
import {StyleSheet, View, ImageBackground} from 'react-native';
import toLower from 'lodash-es/toLower';
import * as Animatable from 'react-native-animatable';

import IconSun from '../../../assets/Icon-Sun.svg';
import IconRain from '../../../assets/Icon-Rain.svg';
import IconCloud from '../../../assets/Icon-Cloud.svg';
import IconFog from '../../../assets/Icon-Fog.svg';
import IconNight from '../../../assets/Icon-Night.svg';
import IconSunrise from '../../../assets/Icon-Sunrise.svg';
import IconSunset from '../../../assets/Icon-Sunset.svg';
import IconOvercast from '../../../assets/Icon-Overcast2.svg';
import IconClear from '../../../assets/Icon-Sun.svg';

import globals from '../../../styles/Global';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../styles/Typography';
import Colors from '../../../styles/Colors';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  generateWeatherIcon(weatherDescription) {
    if (weatherDescription) {
      if (toLower(weatherDescription).indexOf('sunny') !== -1) {
        return <IconSun style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('rain') !== -1) {
        return <IconRain style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('cloud') !== -1) {
        return <IconCloud style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('fog') !== -1) {
        return <IconFog style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('night') !== -1) {
        return <IconNight style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('sunrise') !== -1) {
        return <IconSunrise style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('sunset') !== -1) {
        return <IconSunset style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('overcast') !== -1) {
        return <IconOvercast style={styles.weatherCardStatusIcon} />;
      } else if (toLower(weatherDescription).indexOf('clear') !== -1) {
        return <IconClear style={styles.weatherCardStatusIcon} />;
      }
    }
  }

  render() {
    const image = require('../../../assets/demo.jpg');

    return (
      <Container>
        <ImageBackground source={image} style={styles.bgImage}>
          <Header style={globals.noHeaderBorder}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  type="Ionicons"
                  style={globals.appBackButton}
                />
              </Button>
            </Left>
          </Header>
          <Content style={styles.appContent}>
            <View style={styles.weatherInfoView}>
              <View style={styles.weatherCardStatusView}>
                {this.generateWeatherIcon('sunny')}
                <Text style={styles.weatherCardStatus}> Sunny</Text>
              </View>
              <View style={styles.weatherCardLocationView}>
                <Text style={styles.weatherCardLocation}>Tokyo, Japan</Text>
              </View>
              <View style={styles.weatherCardTemperatureView}>
                <Text style={styles.weatherCardTemperature}>37&deg;</Text>
              </View>
            </View>
          </Content>
          <Animatable.View animation={'slideInUp'} duration={500}>
            <View style={styles.appFooter}>
              <View style={styles.weatherListView}>
                <List>
                  <ListItem style={styles.weatherListItemCol}>
                    <Left style={globals.viewFlex5}>
                      <Text style={styles.weatherListItemLabel}>Tomorrow</Text>
                    </Left>
                    <Body style={styles.weatherListItemIconView}>
                      {this.generateWeatherIcon('sunny')}
                    </Body>
                    <Right style={styles.weatherListItemTempView}>
                      <Text style={styles.weatherListItemLabel}>17</Text>
                      <Text style={styles.weatherListItemNote}>12</Text>
                    </Right>
                  </ListItem>
                  <ListItem style={styles.weatherListItemCol}>
                    <Left style={globals.viewFlex5}>
                      <Text style={styles.weatherListItemLabel}>Tuesday</Text>
                    </Left>
                    <Body style={styles.weatherListItemIconView}>
                      {this.generateWeatherIcon('sunny')}
                    </Body>
                    <Right style={styles.weatherListItemTempView}>
                      <Text style={styles.weatherListItemLabel}>17</Text>
                      <Text style={styles.weatherListItemNote}>12</Text>
                    </Right>
                  </ListItem>
                  <ListItem style={styles.weatherListItemCol}>
                    <Left style={globals.viewFlex5}>
                      <Text style={styles.weatherListItemLabel}>Wednesday</Text>
                    </Left>
                    <Body style={styles.weatherListItemIconView}>
                      {this.generateWeatherIcon('sunny')}
                    </Body>
                    <Right style={styles.weatherListItemTempView}>
                      <Text style={styles.weatherListItemLabel}>17</Text>
                      <Text style={styles.weatherListItemNote}>12</Text>
                    </Right>
                  </ListItem>
                  <ListItem style={styles.weatherListItemCol}>
                    <Left style={globals.viewFlex5}>
                      <Text style={styles.weatherListItemLabel}>Thursday</Text>
                    </Left>
                    <Body style={styles.weatherListItemIconView}>
                      {this.generateWeatherIcon('sunny')}
                    </Body>
                    <Right style={styles.weatherListItemTempView}>
                      <Text style={styles.weatherListItemLabel}>17</Text>
                      <Text style={styles.weatherListItemNote}>12</Text>
                    </Right>
                  </ListItem>
                  <ListItem style={styles.weatherListItemCol}>
                    <Left style={globals.viewFlex5}>
                      <Text style={styles.weatherListItemLabel}>Friday</Text>
                    </Left>
                    <Body style={styles.weatherListItemIconView}>
                      {this.generateWeatherIcon('sunny')}
                    </Body>
                    <Right style={styles.weatherListItemTempView}>
                      <Text style={styles.weatherListItemLabel}>17</Text>
                      <Text style={styles.weatherListItemNote}>12</Text>
                    </Right>
                  </ListItem>
                </List>
              </View>
            </View>
          </Animatable.View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appContent: {
    position: 'relative',
  },
  appFooter: {
    height: 300,
    // backgroundColor: 'transparent',
    backgroundColor: '#2A2E43',
    borderTopWidth: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // marginTop: 24,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  weatherInfoView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 42,
  },
  weatherCardStatusView: {
    marginTop: 0,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherCardStatus: {
    ...FONT_REGULAR,
    fontSize: 24,
    lineHeight: 29,
    color: Colors.colorWhite,
  },
  weatherCardStatusIcon: {
    height: 34,
    width: 34,
  },
  weatherCardLocationView: {},
  weatherCardLocation: {
    ...FONT_REGULAR,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.colorWhite,
  },
  weatherCardTemperatureView: {
    position: 'absolute',
    top: 96,
    right: 0,
    paddingRight: 24,
  },
  weatherCardTemperature: {
    ...FONT_SEMI_BOLD,
    fontSize: 64,
    lineHeight: 77,
    color: Colors.colorWhite,
  },
  weatherListView: {
    backgroundColor: '#2A2E43',
    marginTop: 24,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 24,
    // borderTopLeftRadius: 24,
    // borderTopRightRadius: 24,
  },
  weatherListItemCol: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  weatherListItemLabel: {
    ...FONT_REGULAR,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.26,
    color: Colors.colorWhite,
  },
  weatherListItemNote: {
    ...FONT_REGULAR,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.26,
    color: Colors.colorWhite,
    opacity: 0.5,
    marginLeft: 15,
  },
  weatherListItemIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  weatherListItemTempView: {
    flexDirection: 'row',
  },
});
