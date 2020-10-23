import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CrearAviso from './views/CrearAviso';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {IconButton, Colors} from 'react-native-paper';

import Fotografias from './views/Fotografias';
import TituloDescripcion from './views/TituloDescripcion';
import LugarUbicacion from './views/LugarUbicacion';
import PrecioKilo from './views/PrecioKilo';
import GeneticaUsos from './views/GeneticaUsos';
import CantidadRazaPeso from './views/CantidadRazaPeso';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>

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
 
    <Stack.Navigator>
      <Stack.Screen
        name="CrearAviso"
        component={CrearAviso}
        options={{
          title: "Crear Aviso"
        }}
      />
      <Stack.Screen
        name="Fotografias"
        component={Fotografias}
        options={{
          title: "Fotografías"
        }}
      />
      <Stack.Screen
        name="TituloDescripcion"
        component={TituloDescripcion}
        options={{
          title: "Título y Descripción"
        }}
      />
      <Stack.Screen
        name="LugarUbicacion"
        component={LugarUbicacion}
        options={{
          title: "Lugar de Ubicación"
        }}
      />
      <Stack.Screen
        name="PrecioKilo"
        component={PrecioKilo}
        options={{
          title: "Precio por Kilo"
        }}
      />
      <Stack.Screen
        name="CantidadRazaPeso"
        component={CantidadRazaPeso}
        options={{
          title: "Cantidad, Raza y Peso"
        }}
      />
      <Stack.Screen
        name="GeneticaUsos"
        component={GeneticaUsos}
        options={{
          title: "Genetica y Usos"
        }}
      />

    </Stack.Navigator>
  
    
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Home</Text>
          <IconButton
            icon="home"
            color={Colors.white}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </Button>

        <Button full>
          <Text>Mi Perfil</Text>
          <IconButton
            icon="user-alt"
            color={Colors.white}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </Button>

        <Button full>
          <Text>Buscar</Text>
          <IconButton
            icon="search-circle"
            color={Colors.white}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </Button>

        <Button full>
          <Text>Notificaciones</Text>
          <IconButton
            icon="bell"
            color={Colors.white}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </Button>

        <Button full>
          <Text>Ventas</Text>
        </Button>
      </FooterTab>
    </Footer>
  </NavigationContainer>
  </>
  );
};



export default App;
