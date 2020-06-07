import React from 'react';
import ENV from '../env';

import { View, Image, StyleSheet } from 'react-native';

const MapPreview = (props) => {
  let mapURL;

  if (props.location) {
    mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:%7C${props.location.lat},${props.location.lng}&key=${ENV.googleMapsApiKey}`;
  }

  return (
    <View style={{ ...styles.MapPreview, ...props.style }}>
      {
        props.location ?
          <Image
            style={styles.mapaImage}
            source={{ uri: mapURL }}
          />
          :
          props.children
      }
    </View>
  )
};

const styles = StyleSheet.create({
  MapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapaImage: {
    width: '100%',
    height: '100%'
  }
});

export default MapPreview;