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
    TextInput,
} from 'react-native';
import { RealmCarta } from "./RealmCarta";
import Realm from 'realm';

const CartaSchema = {
    name: 'Carta',
    primaryKey: 'id',
    properties: {
        id: 'int',
        owner: 'string',
    }
};


// Keep in mind:
// This implementation does not keep a good track of the IDs.
// it is just to show status keeps when you restart phone.

export function RealmCartas ({navigation}) {

    const [cards, setCards] = useState([]);
    const [inputText, setInputText] = useState();
    const [idIndex, setIdIndex] = useState(0);

    const addNewCard = async () => {
        // Add a new card on realm db
        await Realm.open({schema: [CartaSchema]})
        .then(realm => {
            realm.write(() => {
                realm.create('Carta', {
                    id: idIndex,
                    owner: inputText,
                });
            });
        })
        .catch(error => {
            console.log(error);
        });
        // Update the state
        setIdIndex(idIndex + 1);
        setInputText('');
        setCardsFromRealm();
    };

    // Set cards
    const setCardsFromRealm = async () => {
        await Realm.open({schema: [CartaSchema]})
        .then(realm => {
            const cards = realm.objects('Carta');
            setCards(cards);
        })
        .catch(error => {
            console.log(error);
        });
    };

    // Log what is saved in realm
    useEffect(() => {
        Realm.open({schema: [CartaSchema]})
        .then(realm => {
            const cards = realm.objects('Carta');
            setCards(cards);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const deleteCard = async (index) => {
        // Delete card on realm db
        await Realm.open({schema: [CartaSchema]})
        .then(realm => {
            realm.write(() => {
                realm.delete(cards[index]);
            });
        })
        .catch(error => {
            console.log(error);
        });
        setCardsFromRealm();
    };

    const resetRealmDb = async () => {
        // Delete all cards on realm db
        await Realm.open({schema: [CartaSchema]})
        .then(realm => {
            realm.write(() => {
                realm.deleteAll();
            });
        })
        .catch(error => {
            console.log(error);
        });
        setCardsFromRealm();
        setIdIndex(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Realm Cards</Text>
            <View style={styles.inputBoxRow}>
                <TextInput 
                    style={styles.newCardTextInput} 
                    placeholder={'Insert card owner'} 
                    onChangeText={text => setInputText(text)}> 
                    {inputText} 
                </TextInput>
                <TouchableWithoutFeedback onPress={() => addNewCard() }>
                    <Image style={styles.newCardButton} source={require('../img/uparrow.png')} style={{height: 25, width: 25}} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => resetRealmDb() }>
                    <Image style={styles.newCardButton} source={require('../img/trashcan.png')} style={{height: 25, width: 25}} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.cardOwnerList}>
                <FlatList
                    data={cards}
                    renderItem={({item}) => <RealmCarta owner={item.owner} id={item.id} deleteCard={deleteCard}/>}
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
});