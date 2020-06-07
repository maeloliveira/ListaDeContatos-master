import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Text, ScrollView } from 'react-native';
import InputContact from '../components/InputContact';
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from '../store/contact-actions';
import * as firebase from 'firebase';
import ENV from '../env';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(ENV.firebaseConfig);
}

const db = firebase.firestore()

const NewContact = (props) => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    db.collection('contacts').onSnapshot((snapshot) => {
      let aux = [];
      snapshot.forEach(doc => {
        aux.push(doc.data());
      });
      setContacts(aux);
    });
  }, [dispatch]);

  const addContact = (nome, celular, foto, lat, lng) => {
    var lastId = 8;
    contact.forEach((item) => {
      if (item.id > lastId) {
        lastId = item.id;
      }
    })
    var now = new Date;
    db.collection('contacts').add({
      id: parseInt(lastId) + 2,
      nome: nome ? nome : ' ',
      celular: celular ? celular : ' ',
      foto: foto ? foto : ' ',
      lat: lat ? lat : ' ',
      lng: lng ? lng : ' ',
      data: now.toLocaleString()
    })

    // dispatch(contactsActions.addContato());
  }

  return (
    <ScrollView>
      <View>
        <InputContact onAddContact={addContact} isEditing={false} />
      </View>
    </ScrollView>
  )
};

const estilos = StyleSheet.create({
});

NewContact.navigationOptions = dadosNav => {
  return {
    headerTitle: "Cadastrar contato"
  }
}

export default NewContact;
