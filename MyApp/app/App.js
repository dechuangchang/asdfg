
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Img from './components/Image'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const color = Platform.select({
  ios: {color:'red'},
  android:{color:'blue'},
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
        <Img src={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>22Welcome to React Native!  </Text>
        <Text style={color}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color:'red',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
