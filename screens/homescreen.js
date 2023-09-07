import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Homescreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'lightgreen', flex:1, alignItems:"center", justifyContent:"center"}}>
        <Image style={styles.logo} source={require('../assets/download.png')} />
        <Text style={styles.text1}>We take your plastic,</Text>
        <Text style={{color:"darkgreen", marginBottom:135}}> and you get rewards.</Text>
        <Text style={{color:"green"}}>To start click on the recycling icon on the bottom.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    marginBottom:100
  },
  text1:{
    color:"darkgreen",
    marginBottom:5
  }
});