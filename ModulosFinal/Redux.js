import React, {Component, useEffect, useState, useRef} from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text,
    FlatList,
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
    Linking
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, logIn, logOut } from "../redux/actions/index";

export function Redux ({navigation}) {

    const counter = useSelector(state => state.counterReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    return (
        // Redux counter
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.counter}>{counter}</Text>
            <View style={styles.options}>
                <TouchableWithoutFeedback onPress={() => dispatch(increment())}>
                    <Text style={styles.button}>+</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => dispatch(decrement())}>
                    <Text style={styles.button}>-</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => dispatch(reset())}>
                    <Text style={styles.button}>Reset</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: 'lightgreen',
        padding: 10,
        width: '100%',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'lightgreen',
        padding: 10,
        width: '100%',
    },
    counter: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
        width: '100%',
    },
    button: {
        fontSize: 30,
        textAlign: 'center',
    },
});