import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CartaoTarefa({titulo, categoria, prazo, concluida}){
    function verDetalhes(){
        Alert.alert('Detalhes', `Título: ${titulo}\nPrazo: ${prazo}`);
    }

    return(
        <View style={styles.card}>

            {/*Info da tarefa (geral)*/}
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.categoria}>Categoria: {categoria}</Text>
            <Text style={styles.prazo}>Prazo: {prazo}</Text>
            <Text 
                style={concluida ? styles.concluida : styles.pendente}
            >{concluida ? 'Concluída' : 'Pendente'}</Text>

            {/*Botão ver detalhes*/}
            <TouchableOpacity
                style={styles.botao}
                onPress={verDetalhes}
            >
                <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </TouchableOpacity>

        </View>
    );
}

//Personalização
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#c7d6ed',
      padding: 30,
      width: '100%',
      height: '100%',
    },
    titulo: {
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 40,
        color: '#011129',
    },
    categoria: {
      fontSize: 25,
      marginBottom: 8,
    },
    prazo: {
      fontSize: 25,
      marginBottom: 8,
    },
    concluida: {
        color: 'green',
        fontSize: 25,
    },
    pendente: {
        color: 'red',
        fontSize: 25,
    },
    botao: {
        marginTop: 30,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#3e6db5',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
  
});