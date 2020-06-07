import React from 'react';
import Variables from '../Variables/Variables'
import {
  Platform
} from 'react-native';
import { HeaderButton, Ionicons } from 'react-navigation-header-buttons';

const HeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'ios' ? 'black' : Variables.moon1000}
    />
  );
};

export default HeaderBtn;
