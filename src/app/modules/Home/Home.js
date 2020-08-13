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
} from 'native-base';
import WeatherCardItem from '../../shared/components/WeatherCardItem/WeatherCardItem';
import {FlatList} from 'react-native';
import {PLACES} from '../../shared/constants/data';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityListArr: PLACES,
    };
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
        <Content>
          <List
            nestedScrollEnabled
            dataArray={this.state.cityListArr}
            renderItem={({item}) => <WeatherCardItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </Content>
      </Container>
    );
  }
}
