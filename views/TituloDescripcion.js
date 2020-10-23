import {View,StyleSheet, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button,Left, Right, Text, List, ListItem} from 'native-base';

import React, {useState} from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const TituloDescripcion = () => {

    const [titulo, guardarTitulo] = useState('');
    const [descripcion, guardarDescripcion] = useState('');

    const [habilitado, guardarHabilitado] = useState(false);
    const interruptor = () => {
        guardarHabilitado(estadoAnterior => !estadoAnterior);
    } 

    return (
        <> 
            <View>
                <Text style={styles.label}>Titulo:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(texto) => guardarTitulo(texto)}
                    placeholder="Título Aviso..."
                />
            </View>
            <Text style={styles.label}>Descripcion:</Text>
            <View style={[{ padding:5}]}> 
                <AutoGrowingTextInput 
                    style={}
                    placeholder={'mensaje'}
                />
                <TextInput 
                    style={[styles.input, {height: 200, justifyContent:"flex-start", textAlignVertical:'top'}]}
                    multiline={true}
                    numberOfLines= {10}
                    onChangeText={(texto) => guardarDescripcion(texto)}
                    placeholder="Descripción Aviso..."
                    underlineColorAndroid="transparent"
                />
            </View>
            <List>
                <ListItem>
                    <Right>
                        <Text>Preñada: </Text>
                    </Right>
                    <Left>
                        <Switch 
                            style={styles.switch}
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            thumbColor={habilitado ? "#1e90ff" : "#f4f3f4"}
                            ios_backgroundColor= "#3e3e3e"
                            onValueChange={interruptor}
                            value={habilitado}
                        />
                    </Left>
                </ListItem>
            </List>
            <View style={styles.contenido}>
                <Button
                    style={styles.btn}
                    rounded
                    block 
                >
                    <Text>Cargar Información</Text>
                </Button>
            </View>
            
            
        </>
    );
}

const styles = StyleSheet.create({
    switch: {
        marginStart: 30,
    },
    input: {
        marginTop: 5,
        height: 45,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
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

    },
})
export default TituloDescripcion;