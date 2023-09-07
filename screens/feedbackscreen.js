import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';

export default class Feedbackscreen extends Component{
  render(){
    return(         
      <View style={{backgroundColor:'lightgreen', flex:1, alignItems:"center", justifyContent:"center"}}>
        <h1>Feedback Form</h1>
        <textarea 
          style={styles.box}
          placeholder={"Write your feedback here"}
          name="Text1"
          cols="40"
          rows="5"
        ></textarea>
        <TouchableOpacity style={{
              marginTop:25,
              backgroundColor:'white', 
              width:100, 
              height:25, 
              borderWidth:2, 
              borderRadius:10, 
              borderColor:'black',
              textAlign: 'center'
        }}>
          <Text style={{
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box:{
    height:100,
    width:300,
    backgroundColor:'white',
    borderWidth:2,
    borderRadius:10,
    borderColor:'black'
  }
});


