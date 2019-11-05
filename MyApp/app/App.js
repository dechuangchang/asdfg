
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Img from './components/Image'
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'
import PizzaTranslator from './components/PizzaTranslator'
import ScrollView from './components/ScrollView'
import FlatList from './components/FlatList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  componentDidMount(){

  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <FlatList />
          {/* <ScrollView /> */}
        {/* <PizzaTranslator /> */}
        {/* <FlexDimensionsBasics /> */}
        {/* <Blink name='酷狗' /> */}
        {/* <Img src={pic} style={{width: 193, height: 110}}/>
        <Greeting name='A'/>
        <Greeting name='B'/>
        <Greeting name='C'/>
        <Text style={styles.welcome}>22Welcome to React Native!  </Text>
        <Text style={color}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    display:'flex',
    backgroundColor:'rgba(0,0,0,0.1)',
    paddingTop:40
  },
  
});
