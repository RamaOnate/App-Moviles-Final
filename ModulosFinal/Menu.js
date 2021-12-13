import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';

export function Menu ({navigation}) {

    return (
        <View style= {styles.container}>
            <Text style={styles.title}>Menu</Text>
            <View style={styles.optionsContainer}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('FetchFamilias')}>
                    <Text style={styles.menuOption}>FetchFamilias</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Cartas')}>
                    <Text style={styles.menuOption}>Cartas</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('BusinessCards')}>
                    <Text style={styles.menuOption}>BusinessCards</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('StopWatch')}>
                    <Text style={styles.menuOption}>StopWatch</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Mapa')}>
                    <Text style={styles.menuOption}>Mapa</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('RealmCartas')}>
                    <Text style={styles.menuOption}>RealmCartas</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Redux')}>
                    <Text style={styles.menuOption}>Redux</Text>
                </TouchableWithoutFeedback>

            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuOption: {
        fontSize: 20,
        margin: 10,
        color: '#000',
        borderWidth: 3,
        padding: 5,
        borderRadius: 30,
        textAlign: 'center',
        width: 300,
    }
});