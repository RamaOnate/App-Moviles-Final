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

export function Cartas ({navigation}) {

    const movement1 = useRef(new Animated.Value(0)).current;
    const movement2 = useRef(new Animated.Value(0)).current;
    const movement3 = useRef(new Animated.Value(0)).current;
    const movement4 = useRef(new Animated.Value(0)).current;
    const [animationHappened, setanimationHappened] = useState(false);

    const animate = (movementX) => {
        if(animationHappened) {
            forwardMovement(movementX);
            setanimationHappened(false);
        } else {
            reverseMovement(movementX);
            setanimationHappened(true);
        }
    }

    const forwardMovement = (movementX) => {
        Animated.timing(movementX, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const reverseMovement = (movementX) => {
        Animated.timing(movementX, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const spinAValue = movement1.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const spinBValue = movement2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg']
    });

    const spinCValue = movement3.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const spinDValue = movement4.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.cardPage}>

            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => animate(movement1)}>
                    <Animated.View style={[styles.card, {transform: [{rotateZ: spinAValue}]}]}>
                        <Image source={require('../img/clockwise.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => animate(movement2)}>
                    <Animated.View style={[styles.card, {transform: [{rotateZ: spinBValue}]}]}>
                        <Image source={require('../img/counterclockwise.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => animate(movement3)}>
                    <Animated.View style={[styles.card, {transform: [{rotateY: spinCValue}]}]}>
                        <Image source={require('../img/flip.png')} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => animate(movement4)}>
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