import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ContactItem from '../components/ContactItem';
import InputContact from '../components/InputContact';
import Card from '../components/Card';
import HeaderBtn from '../components/HeaderBtn'
import Variables from '../Variables/Variables';
import * as firebase from 'firebase';
import ENV from '../env';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(ENV.firebaseConfig);
}

const db = firebase.firestore()

const styles = StyleSheet.create({
  MainScreenView: {
    padding: Variables.large
  },
  card: {
    margin: Variables.large
  }
});

const ContactList = (props) => {
  const [visualizeContact, setVisualizeContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [contactsCount, setContactsCount] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('contatos').onSnapshot((snapshot) => {
      let aux = [];
      snapshot.forEach(doc => {
        aux.push(doc.data());
      });
      setContatos(aux);
    });
  }, [dispatch]);

  const removeContact = (keyToRemove) => {
    Alert.alert(
      'Remover contato ' + keyToRemove + '?',
      '',
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: () => {
            setContacts(contacts => {
              return contacts.filter((contact) => {
                return contact.key !== keyToRemove
              })
            });
          }
        }
      ]
    )
  };

  const viewContact = (contact) => {
    setVisualizeContact(contact);
  };

  const addContact = (nome, celular) => {
    setContacts((contacts) => {
      setContactsCount(contactsCount + 2);
      return [
        ...contacts,
        {
          key: contactsCount.toString(),
          nome: nome,
          celular: celular
        }
      ];
    });
  }

  const editContact = (nome, celular) => {
    var currentContacts = contacts;

    var itemNovo = false;

    currentContacts.forEach((item) => {
      if (item.key == visualizeContact.key) {
        item.nome = nome
        item.celular = celular

        itemNovo = item;
      }
    })

    setIsEditing(false);
    setVisualizeContact(null);
  }

  return (
    <View>
      {visualizeContact ? (
        <View style={styles.MainScreenView}>
          <TouchableOpacity onPress={() => {
            setIsEditing(false)
            setVisualizeContact(null)
          }}>
            <View>
              <Text>Voltar para a listagem</Text>
            </View>
          </TouchableOpacity>
          {isEditing ? (
            <View>
              <InputContact onAddContact={editContact} isEditing={true} />
            </View>
          ) : (<View></View>)}
          <Card styles={styles.contactItem}>
            <ContactItem
              contact={visualizeContact}
              onPress={viewContact}
              onDelete={removeContact}
            />
          </Card>
          <TouchableOpacity onPress={() => { setIsEditing(true) }}>
            <View>
              <Text>Editar</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
          <View style={styles.MainScreenView}>
            <FlatList
              data={contacts}
              renderItem={
                contact => (
                  <Card styles={styles.contactItem}>
                    <ContactItem
                      contact={contact.item}
                      onPress={viewContact}
                      onDelete={removeContact}
                    />
                  </Card>
                )
              }
            />
          </View>
        )}
    </View>
  );
}

ContactList.navigationOptions = dataNav => {
  return {
    headerTitle: "Lista de contatos",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Adicionar"
          iconnome={Platform.OS === 'ios' ? 'md-add' : 'ios-add'}
          onPress={() => { dataNav.navigation.navigate("NewContact") }}
        />
      </HeaderButtons>
    )
  }
}

export default ContactList;