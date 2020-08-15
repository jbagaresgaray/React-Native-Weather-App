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
} from 'native-base';
import async from 'async';
import WeatherCardItem from '../../shared/components/WeatherCardItem/WeatherCardItem';
import {PLACES} from '../../shared/constants/data';
import {getPhotoByCityName} from '../../shared/services/Unsplash';
import {StyleSheet} from 'react-native';

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
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('SearchModal')}>
              <Icon name="search-outline" type="Ionicons" />
            </Button>
          </Right>
        </Header>
        <View style={styles.customContent}>
          <List
            nestedScrollEnabled
            dataArray={this.state.cityListArr}
            renderItem={({item}) => (
              <WeatherCardItem
                item={item}
                onPress={() => this.navigateDetails()}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  customContent: {
    flex: 1,
  },
});
