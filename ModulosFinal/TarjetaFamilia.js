import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export function TarjetaFamilia (props) {
    
    useEffect(() => {
        console.log('Las props valen: '+props.user.apellido)
    }, [])

    return (
        
        <View style={styles.familyView}>
            <Text>{props.user.name.first}, {props.user.name.last}</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    familyView: {
        margin: 10,
        backgroundColor: 'lightblue',
        width: '100%',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
    }
});