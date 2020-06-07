import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import Variables from '../Variables/Variables';
import ImagePicker from 'react-native-image-picker';

const TakePhoto = props => {
  const [imagemURI, setImagemURI] = useState();

  async function takePhoto() {

    const photo = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    setImagemURI(photo.uri);

    props.onPhotoTaken(photo.uri);
  }

  return (
    <View style={styles.main}>
      <View style={styles.previewDaImagem}>
        {
          !imagemURI ?
            <Text>Nenhuma foto.</Text>
            :
            <Image
              style={styles.imagem}
              source={{ uri: imagemURI }}
            />
        }
      </View>
      <Button
        title="Tirar foto"
        color={Variables.space100}
        onPress={takePhoto}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginBottom: 15
  },
  previewDaImagem: {
    width: '100%',
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
  }
});
export default TakePhoto;