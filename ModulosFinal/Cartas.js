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

const openVid = () => {
    Linking.openURL('https://youtu.be/YG6kGa3rcg0?t=34'); 
}

export function Cartas () {

    const movement = useRef(new Animated.Value(0)).current;

    // On useref change I need to reset animation
    useEffect(() => {
        movement.current = new Animated.Value(0);
    }, [movement]);

    const animate = () => {
        Animated.timing(movement, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const spinAValue = movement.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const spinBValue = movement.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg']
    });

    const spinCValue = movement.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const spinDValue = movement.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.cardPage}>

            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={animate}>
                    <Animated.View style={[styles.card, {transform: [{rotateZ: spinAValue}]}]}>
                        <Image source={require('../img/clockwise.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={animate}>
                    <Animated.View style={[styles.card, {transform: [{rotateZ: spinBValue}]}]}>
                        <Image source={require('../img/counterclockwise.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={animate}>
                    <Animated.View style={[styles.card, {transform: [{rotateY: spinCValue}]}]}>
                        <Image source={require('../img/flip.png')} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={animate}>
                    <Animated.View style={[styles.card, {transform: [{rotateX: spinDValue}]}]}>
                        <Image source={require('../img/uparrow.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    cardPage: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '95%',
        borderWidth: 3,
        backgroundColor: '#ebce8d',
    },
    row: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    card: {
        width: 100,
        height: 150,
        backgroundColor: '#eba834',
        borderRadius: 30,
        borderWidth: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})