import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

export default class SearchModalScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" type="Ionicons" />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
