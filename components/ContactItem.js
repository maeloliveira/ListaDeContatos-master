import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Variables from '../Variables/Variables'

const ContactItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress.bind(this, props.contact)} onLongPress={props.onDelete.bind(this, props.contact.id)}>
      <View style={styles.itemNaLista}>
        <Text>#{props.contact.id}</Text>
        <Text>Nome: {props.contact.nome}</Text>
        <Text>Telefone: {props.contact.celular}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: Variables.small,
    backgroundColor: Variables.moon100,
    borderColor: Variables.moon400,
    borderWidth: Variables.verySmall,
    marginBottom: Variables.medium,
    marginTop: 10,
    borderRadius: Variables.medium,
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Cores.primary,
    borderWidth: 1
  }
});

export default ContactItem;