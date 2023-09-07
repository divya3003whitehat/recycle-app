import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import ShoppingButtons from './ShoppingButtons';
import WebScreen from '../screens/webscreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> //initialRouteName="ShoppingButtons"
        <Stack.Screen name="ShoppingButtons" component={ShoppingButtons} /> 
        <Stack.Screen name="WebScreen" component={WebViewScreen} />
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
};

export default App;


