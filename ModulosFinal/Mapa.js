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
            <MapView style={styles.map} initialRegion={{latitude: 50, longitude: 50}}>
                <Marker coordinate={{latitude: 50, longitude: 50}}/>
            </MapView>
        </View>
    );

}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '100%',
    },
    map: {
        width: '80%',
        height: '80%',
    },
});