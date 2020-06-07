import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Variables from '../Variables/Variables';
import ContactList from '../Screens/ContactList'
import NewContact from '../Screens/NewContact'

const ContactsNavigator = createStackNavigator({
  ContactList: ContactList,
  NewContact: NewContact
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backGroundColor: Platform.OS === 'ios' ? Variables.moon1000 : ''
      },
      headerTintColor: Platform.OS === 'ios' ? 'white' : Variables.moon1000
    }
  });

export default createAppContainer(ContactsNavigator);