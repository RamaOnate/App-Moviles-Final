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
} from 'react-native';
import { TarjetaFamilia } from './TarjetaFamilia';

export function FetchFamilias () {
    
    const [familias, setFamilias] = useState([]);
    const [limit, setLimit] = useState(2);

    const amountToFetch = 2;

    const buscarFamilias = () => {
        fetch("https://randomuser.me/api?results="+limit)
        .then( res => res.json() )
        .then(response => {
            setFamilias(response.results);
        })
        .catch(msg => console.log(msg))
    }

    const obtainMoreResults = async () => {
        await setLimit(limit+amountToFetch);
        buscarFamilias();
    }

    const restartResults = async () => {
        await setLimit(2);
        buscarFamilias();
    }

    useEffect(() => {
        buscarFamilias();
    }, [])

    return (
        <View>
            <Text style={styles.title}>Familias obtenidas con fetch</Text>
            <View style={styles.familyViewContainer}>
                <FlatList 
                    data={familias} 
                    style={styles.familiesList}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center' }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ ({item}) => <TarjetaFamilia user={item}/> } />
                <View style={styles.optionsView}>
                    <TouchableWithoutFeedback onPress={() => obtainMoreResults()}>
                        <Text style={styles.plusSign}>+</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => restartResults()}>
                        <Text style={styles.plusSign}>Restart</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    familiesList: {
        height: '50%',
        backgroundColor: 'black',
        opacity: 0.8,
        borderRadius: 100,
        width: '70%',
    },
    familyViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
    },
    plusSign: {
        fontSize: 35,
    },
    optionsView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: '70%',
        justifyContent: 'space-around',
    }
})