import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PreviewDoMapa from '../components/PreviewDoMapa'
import BotaoCabecalho from '../components/BotaoCabecalho'
import Variables from '../Variables/Variables';

const ContactDetails = (props) => {
  var contact = props.navigation.state.params.contact;

  return (
    <View>
      <View style={styles.mainScreen}>
        {contact.foto ? (
          <View style={styles.imageBlock}>
            <Image
              style={styles.imagem}
              source={{ uri: contact.foto }}
            />
          </View>
        ) : (
            <>
            </>
          )}
        <Text>ID: {contact.id}</Text>
        <Text>Nome: {contact.nome}</Text>
        <Text>Celular: {contact.celular}</Text>
        <Text>Cadastrado em: {contact.createdAt}</Text>
        <Text>Localização:</Text>
        <PreviewDoMapa
          style={styles.previewDoMapa}
          location={{
            lat: contact.lat,
            lng: contact.lng
          }}
        />
      </View>
    </View>
  );
}

DetalhesDoContact.navigationOptions = dadosNav => {
  var contact = dadosNav.navigation.getParam('contact');

  return {
    headerTitle: contact.id + ' - ' + contact.nome,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Editar"
          iconName={Platform.OS === 'android' ? 'md-edit' : 'ios-edit'}
          onPress={() => { dadosNav.navigation.navigate("NovoContact") }}
        />
      </HeaderButtons>
    )
  }
}


const styles = StyleSheet.create({
  mainScreen: {
    padding: Variables.large
  },
  card: {
    margin: Variables.large
  },
  imageBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  imagem: {
    width: '100%',
    height: '100%'
  },
  previewDoMapa: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ContactDetails;