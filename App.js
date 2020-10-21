import 'react-native-gesture-handler';

import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';



const App = () => {
  return (
    <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Uyuui!</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Text>
        This is Content Section
      </Text>
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Home</Text>
        </Button>

        <Button full>
          <Text>Mi Perfil</Text>
        </Button>

        <Button full>
          <Text>Buscar</Text>
        </Button>

        <Button full>
          <Text>Notificaciones</Text>
        </Button>

        <Button full>
          <Text>Ventas</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
  );
};



export default App;
