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

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

export function StopWatch ({navigation}) {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // useEffect for stopwatch
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                if(seconds + 1 == 60) {
                    setSeconds(0);
                    if(minutes + 1 == 60) {
                        setMinutes(0);
                        setHours(hours + 1);
                    } else {
                        setMinutes(minutes + 1);
                    }
                } else {
                    setSeconds(seconds + 1);
                }

            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    const startWatch = () => {
        setIsRunning(true);
    };

    const stopWatch = () => {
        setIsRunning(false);
    };

    const resetStopWatch = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Temporizador</Text>
            <View style={styles.stopWatch}>
                <Text style={styles.time}>{padToTwo(hours) + ':'}</Text>
                <Text style={styles.time}>{padToTwo(minutes) + ':'}</Text>
                <Text style={styles.time}>{padToTwo(seconds)}</Text>
            </View>       
            <View style={styles.buttons}>             
                <TouchableWithoutFeedback onPress={() => startWatch()} disabled={isRunning}>
                    <Text style={styles.button}>    
                        Start
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => stopWatch()} disabled={!isRunning}>
                    <Text style={styles.button}>
                        Stop
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => resetStopWatch()}>
                    <Text style={styles.button}>
                        Reset
                    </Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stopWatch: {
        width: 250,
        height: 250,
        borderRadius: 300,
        borderWidth: 5,
        borderColor: 'green',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',   
    },
    time: {
        fontSize: 30,
        fontWeight: 'bold',
        width: 60,
        textAlign: 'center',
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 20,
    }
});