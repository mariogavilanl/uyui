
import {View,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Separator,Content,List,ListItem,Text,Body, Button, Right, Left} from 'native-base';

import {IconButton, Colors} from 'react-native-paper'
import React, {Fragment} from 'react';


const CrearAviso = () => {

    //Redireccionar 
    const navigation = useNavigation();

    return(
        <Container>
            <Content>
                <List>
                    <Fragment>
                        <ListItem>
                            <Left>
                                <Body> 
                                    <Text>
                                        Fotografías
                                    </Text>
                                    <Text
                                        note
                                        numberOfLines={2}
                                    >
                                        0 de 12
                                    </Text>
                                </Body>
                            </Left>   
                            <Right>
                                    <IconButton
                                        icon="chevron-right"
                                        color={Colors.black}
                                        size={20}
                                        onPress={() => navigation.navigate("Fotografias")}
                                    />   
                            </Right> 
                        </ListItem>
                    </Fragment>
                    <Fragment>
                    <ListItem>
                        <Left>
                            <Body> 
                                <Text>
                                    Título y Descripción
                                </Text>
                                <Text
                                    note
                                    numberOfLines={2}
                                >
                                    Por definir
                                </Text>
                            </Body>
                        </Left>   
                        <Right>
                                <IconButton
                                    icon="chevron-right"
                                    color={Colors.black}
                                    size={20}
                                    onPress={() => navigation.navigate("TituloDescripcion")}
                                />   
                        </Right> 
                    </ListItem>
                </Fragment>
                <Fragment>
                        <ListItem>
                            <Left>
                                <Body> 
                                    <Text>
                                        Lugar de Ubicación
                                    </Text>
                                    <Text
                                        note
                                        numberOfLines={2}
                                    >
                                        Por definir
                                    </Text>
                                </Body>
                            </Left>   
                            <Right>
                                    <IconButton
                                        icon="chevron-right"
                                        color={Colors.black}
                                        size={20}
                                        onPress={() => navigation.navigate("LugarUbicacion")}
                                    />   
                            </Right> 
                        </ListItem>
                    </Fragment>
                    <Fragment>
                        <ListItem>
                            <Left>
                                <Body> 
                                    <Text>
                                        Precio por Kilo
                                    </Text>
                                    <Text
                                        note
                                        numberOfLines={2}
                                    >
                                        Por definir
                                    </Text>
                                </Body>
                            </Left>   
                            <Right>
                                    <IconButton
                                        icon="chevron-right"
                                        color={Colors.black}
                                        size={20}
                                        onPress={() => navigation.navigate("PrecioKilo")}
                                    />   
                            </Right> 
                        </ListItem>
                    </Fragment>
                    <Fragment>
                        <ListItem>
                            <Left>
                                <Body> 
                                    <Text>
                                        Cantidad, Raza y Peso
                                    </Text>
                                    <Text
                                        note
                                        numberOfLines={2}
                                    >
                                        Por definir
                                    </Text>
                                </Body>
                            </Left>   
                            <Right>
                                    <IconButton
                                        icon="chevron-right"
                                        color={Colors.black}
                                        size={20}
                                        onPress={() => navigation.navigate("CantidadRazaPeso")}
                                    />   
                            </Right> 
                        </ListItem>
                    </Fragment>
                    <Fragment>
                        <ListItem>
                            <Left>
                                <Body> 
                                    <Text>
                                        Genética y Usos
                                    </Text>
                                    <Text
                                        note
                                        numberOfLines={2}
                                    >
                                        Por definir
                                    </Text>
                                </Body>
                            </Left>   
                            <Right>
                                    <IconButton
                                        icon="chevron-right"
                                        color={Colors.black}
                                        size={20}
                                        onPress={() => navigation.navigate("GeneticaUsos")}
                                    />   
                            </Right> 
                        </ListItem>
                    </Fragment>
                </List>
                <View style={styles.contenido}>
                    <Button 
                        style={styles.btn}
                        rounded
                        block    
                    >
                        <Text>
                            Crear Aviso
                        </Text>    
                    </Button>
                </View>
                
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    item: {},
    flecha: {
        textAlign: 'center',
    },
    btn: {
        textAlign: 'center'
    },
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 100,
        marginTop: 20,
        margin: 20

    }
})
export default CrearAviso;