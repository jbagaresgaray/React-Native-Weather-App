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

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityListArr: PLACES,
    };
  }

  componentDidMount() {
    this.getMyLocationList();
  }

  getMyLocationList() {
    console.log('getMyLocationList');
    const cityListArr = [...PLACES];
    if (cityListArr) {
      async.eachSeries(
        cityListArr,
        (city, callback) => {
          getPhotoByCityName(city.description, 'portrait')
            .then((response) => {
              if (response) {
                const images = response.results;
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
          // this.setState({
          //   cityListArr: cityListArr,
          // });
          console.log('this.cityListArr: ', cityListArr);
          // console.log('this.cityListArr: ', this.state.cityListArr);
        },
      );
    }
  }

  navigateDetails() {
    console.log('navigateDetails: ');
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('SearchModal')}>
              <Icon name="search-outline" type="Ionicons" />
            </Button>
          </Right>
        </Header>
        <View style={styles.headingView}>
          <Text style={globals.appTitle}>Weather</Text>
        </View>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>TODAY</Text>
              </TabHeading>
            }>
            <View style={styles.customContent}>
              <List
                nestedScrollEnabled
                dataArray={this.state.cityListArr}
                renderItem={({item, index}) =>
                  index % 2 ? (
                    <Animatable.View animation={'bounceInRight'}>
                      <WeatherCardItem
                        item={item}
                        key={index}
                        onPress={() => this.navigateDetails()}
                      />
                    </Animatable.View>
                  ) : (
                    <Animatable.View animation={'bounceInLeft'}>
                      <WeatherCardItem
                        item={item}
                        key={index}
                        onPress={() => this.navigateDetails()}
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
              <TabHeading>
                <Text>Tomorrow</Text>
              </TabHeading>
            }
          />
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
  },
  headingView: {
    // paddingTop: 21,
    paddingLeft: 16,
  },
});
