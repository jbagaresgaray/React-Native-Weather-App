import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Icon,
  Text,
  Item,
  Input,
  List,
} from 'native-base';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {PLACES} from '../../shared/constants/data';
import PlaceCardItem from '../../components/PlaceCardItem/PlaceCardItem';
import globals from '../../../styles/Global';

export default class SearchModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityListArr: PLACES,
    };
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Left style={{flex: null}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" type="Ionicons" />
            </Button>
          </Left>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
        <View style={styles.customContent}>
          <View style={styles.headingView}>
            <Text style={globals.appModalTitle}>
              {this.state.cityListArr.length} Results found
            </Text>
          </View>
          <List
            nestedScrollEnabled
            dataArray={this.state.cityListArr}
            renderItem={({item, index}) =>
              index % 2 ? (
                <Animatable.View animation={'bounceInRight'}>
                  <PlaceCardItem
                    item={item}
                    key={index}
                    onPress={() => this.navigateDetails()}
                  />
                </Animatable.View>
              ) : (
                <Animatable.View animation={'bounceInLeft'}>
                  <PlaceCardItem
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
    paddingTop: 21,
    paddingBottom: 21,
    // paddingLeft: 16,
  },
});
