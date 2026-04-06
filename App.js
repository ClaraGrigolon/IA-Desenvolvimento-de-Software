import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartaoTarefa from './src/components/CartaoTarefa'; 

export default function App(){
    return (
        <View style={styles.container}>

            {/*Dados de CartaoTarefa*/}
            <CartaoTarefa
                titulo = "Estudar React Native"
                categoria = "Estudo"
                prazo ="10/04/2026"
                concluida = {false}
            />
        </View>
    );
}

//Personalização
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
    },
});