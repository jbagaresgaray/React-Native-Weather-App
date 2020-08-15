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
} from 'native-base';

export default class SearchModalScreen extends Component {
  constructor(props) {
    super(props);
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
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
