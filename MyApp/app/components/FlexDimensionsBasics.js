import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
     
    };
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={{flexDirection:'row',height:'20%'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },
})