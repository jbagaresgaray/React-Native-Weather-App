import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  View,
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';
import async from 'async';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import WeatherCardItem from '../../shared/components/WeatherCardItem/WeatherCardItem';
import {PLACES} from '../../shared/constants/data';
import {getPhotoByCityName} from '../../shared/services/Unsplash';

import globals from '../../../styles/Global';
import Colors from '../../../styles/Colors';
import {FONT_LIGHT} from '../../../styles/Typography';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityListArr: PLACES,
      currentTab: 0,
    };
  }

  componentDidMount() {
    this.getMyLocationList();
  }

  getMyLocationList() {
    const cityListArr = [...PLACES];
    if (cityListArr) {
      async.eachSeries(
        cityListArr,
        (city, callback) => {
          getPhotoByCityName(city.description, 'portrait')
            .then((response) => {
              if (response) {
                const images = response.data.results;
                if (images) {
                  if (images[0]) {
                    city.image = images[0].urls;
                  }
                  return callback();
                }
              }
            })
            .catch((error) => {
              console.log('getPhotoByCityName error: ', error);
              return callback();
            });
        },
        () => {
          this.setState({
            cityListArr: cityListArr,
          });
          // console.log('this.cityListArr: ', cityListArr);
          // console.log('this.cityListArr: ', this.state.cityListArr);
        },
      );
    }
  }

  navigateDetails(location) {
    // console.log('navigateDetails: ', location);
    this.props.navigation.navigate('Details', {
      location: location,
    });
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={globals.appHeader}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" style={globals.appHomeButtom} />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('SearchModal')}>
              <Icon
                name="search-outline"
                type="Ionicons"
                style={globals.appHomeButtom}
              />
            </Button>
          </Right>
        </Header>
        <View style={styles.headingView}>
          <Text style={globals.appTitle}>Weather</Text>
        </View>
        <Tabs
          initialPage={this.state.currentTab}
          onChangeTab={({i}) => this.setState({currentTab: i})}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          style={globals.appTabsHeader}
          tabContainerStyle={styles.tabContainerStyle}>
          <Tab
            heading={
              <TabHeading
                style={styles.tabHeadingStyle1}
                tabStyle={styles.tabHeadingStyle}
                activeTabStyle={styles.tabHeadingActiveTabStyle}
                textStyle={styles.tabHeadingInActiveTextStyle}
                activeTextStyle={styles.tabHeadingActiveTextStyle}>
                <Text
                  style={
                    this.state.currentTab === 0
                      ? styles.tabHeadingActiveTextStyle
                      : styles.tabHeadingInActiveTextStyle
                  }>
                  TODAY
                </Text>
              </TabHeading>
            }>
            <View style={styles.customContent}>
              <List
                nestedScrollEnabled
                dataArray={this.state.cityListArr}
                renderItem={({item, index}) =>
                  index % 2 ? (
                    <Animatable.View
                      animation={'bounceInRight'}
                      useNativeDriver={true}>
                      <WeatherCardItem
                        item={item}
                        key={index}
                        onPress={() => this.navigateDetails(item)}
                      />
                    </Animatable.View>
                  ) : (
                    <Animatable.View
                      animation={'bounceInLeft'}
                      useNativeDriver={true}>
                      <WeatherCardItem
                        item={item}
                        key={index}
                        onPress={() => this.navigateDetails(item)}
                      />
                    </Animatable.View>
                  )
                }
                keyExtractor={(item) => item.id}
              />
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={styles.tabHeadingStyle2}
                tabStyle={styles.tabHeadingStyle}
                activeTabStyle={styles.tabHeadingActiveTabStyle}
                textStyle={styles.tabHeadingInActiveTextStyle}
                activeTextStyle={styles.tabHeadingActiveTextStyle}>
                <Text
                  style={
                    this.state.currentTab === 1
                      ? styles.tabHeadingActiveTextStyle
                      : styles.tabHeadingInActiveTextStyle
                  }>
                  TOMORROW
                </Text>
              </TabHeading>
            }>
            <View style={styles.customContent} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  customContent: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor: '#455B6314',
  },
  headingView: {
    // paddingTop: 21,
    paddingLeft: 16,
    paddingBottom: 18,
  },
  tabContainerStyle: {
    backgroundColor: '#455B6314',
    borderBottomWidth: 0,
    elevation: 0,
  },
  tabStyle: {
    backgroundColor: '#455B6314',
    color: Colors.colorTitle,
  },
  tabHeadingStyle: {
    backgroundColor: '#455B6314',
    borderBottomWidth: 0,
  },
  tabBarUnderlineStyle: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
  },
  tabHeadingStyle1: {
    backgroundColor: Colors.colorWhite,
    borderBottomLeftRadius: 24,
  },
  tabHeadingStyle2: {
    backgroundColor: Colors.colorWhite,
    borderBottomRightRadius: 24,
  },
  tabHeadingActiveTabStyle: {
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 0,
  },
  tabHeadingActiveTextStyle: {
    color: Colors.colorTitle,
    fontSize: 12,
    lineHeight: 14,
    ...FONT_LIGHT,
  },
  tabHeadingInActiveTextStyle: {
    color: Colors.colorTitle,
    fontSize: 12,
    lineHeight: 14,
    opacity: 0.35,
    ...FONT_LIGHT,
  },
});
