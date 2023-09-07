import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import Homescreen from '../screens/homescreen';
import Feedbackscreen from '../screens/feedbackscreen';
import Recyclescreen from '../screens/recyclescreen';
import Rewardscreen from '../screens/rewardscreen';
import WebScreen from '../screens/webscreen'


// Screen Names
const HomeName='Home';
const RecycleName='Recycle';
const FeedBackName='Feedback';
const RewardName='Rewards';
const WebName='WebView'


const Tab =createBottomTabNavigator();

export default class Tabnavigation extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={RewardName}
        screenOptions={({route}) =>({
          tabBarIcon:({focused, color, size})=>{
            let iconName;
            let rn=route.name;

            if (rn===HomeName){
              iconName=focused?'home':'home-outline'
            }else if(rn===RecycleName){
              iconName=focused?'leaf':'leaf-outline'
            }else if(rn===RewardName){
              iconName=focused?'pricetags':'pricetags-outline'
            }else if(rn===FeedBackName){
              iconName=focused?'clipboard':'clipboard-outline'
            }else if (rn===WebName){
              iconName=focused?'web':'web-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}>


          <Tab.Screen name={HomeName} component={Homescreen}></Tab.Screen>
          <Tab.Screen name={RecycleName} component={Recyclescreen}></Tab.Screen>
          <Tab.Screen name={RewardName} component={Rewardscreen}></Tab.Screen>
          <Tab.Screen name={WebName} component={WebScreen}></Tab.Screen>
          <Tab.Screen name={FeedBackName} component={Feedbackscreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

