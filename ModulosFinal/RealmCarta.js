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

export function RealmCarta (props) {

    return (
        <View style={styles.deleteButton}>
            <View style={styles.businessCard}>
                <Text>Owner: {props.owner}</Text>
                <Text>Id: {props.id}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => props.deleteCard(props.id)}>
                <Text>X</Text>
            </TouchableWithoutFeedback>
        </View>
    );

}

const styles = StyleSheet.create({
    deleteButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    businessCard: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
});