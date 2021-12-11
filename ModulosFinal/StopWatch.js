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

export function StopWatch () {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Need to add one milisecond to the time
    useEffect(() => {
        if (isRunning) {
            setTimeout(() => {
                setMilliseconds(milliseconds + 1);
                if (milliseconds > 999) {
                    setMilliseconds(0);
                    setSeconds(seconds + 1);
                }
                if (seconds > 59) {
                    setSeconds(0);
                    setMinutes(minutes + 1);
                }
                if (minutes > 59) {
                    setMinutes(0);
                    setHours(hours + 1);
                }
            }, 1);
        }
    }, [isRunning, milliseconds, seconds, minutes, hours]);

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
        setMilliseconds(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>StopWatch</Text>
            <View style={styles.stopWatch}>
                    <Text style={styles.time}>{hours}:{minutes}:{seconds}.{milliseconds}</Text>
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
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'green',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        fontSize: 20,
        fontWeight: 'bold',
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