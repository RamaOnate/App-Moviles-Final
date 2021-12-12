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
import MapView, {Marker} from "react-native-maps";

export function Mapa () {

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map} initialRegion={{latitude: 50, longitude: 50, latitudeDelta: 0.015, longitudeDelta: 0.015}}>
                <Marker coordinate={{latitude: 50.003, longitude: 50.003}}/>
                <Marker coordinate={{latitude: 60.002, longitude: 60.002}}/>
                <Marker coordinate={{latitude: 50, longitude: 50}}/>
            </MapView>
        </View>
    );

}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: 'lightblue',
        borderWidth: 3,
    },
    map: {
        width: '100%',
        height: '100%',
        borderColor: '#000000',
    },
});