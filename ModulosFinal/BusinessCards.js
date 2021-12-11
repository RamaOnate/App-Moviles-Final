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
import { BusinessCard } from "./BusinessCard";

export function BusinessCards () {

    const [cards, setCards] = useState([]);
    const [inputText, setInputText] = useState();
    const [idIndex, setIdIndex] = useState(0);

    const addNewCard = () => {
        if(inputText){
            setCards([...cards, {name: inputText, id: idIndex}]);
            setInputText('');
            setIdIndex(idIndex + 1);
        } else {
            Alert.alert('Error', 'Please enter a name');
        }
    };

    const deleteCard = (index) => {
        setCards(cards.filter(card => card.id != index));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Business Cards</Text>
            <View style={styles.inputBoxRow}>
                <TextInput 
                    style={styles.newCardTextInput} 
                    placeholder={'Insert card owner'} 
                    onChangeText={text => setInputText(text)}> 
                    {inputText} 
                </TextInput>
                <TouchableWithoutFeedback onPress={() => addNewCard() }>
                    <Image style={styles.newCardButton} source={require('../img/uparrow.png')} style={{height: 35, width: 35}} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.cardOwnerList}>
                <FlatList
                    data={cards}
                    renderItem={({item}) => <BusinessCard name={item.name} id={item.id} deleteCard={deleteCard}/>}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center' }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    inputBoxRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    newCardTextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: '80%',
        borderRadius: 15,
    },
    cardOwnerList: {
        
    }
});