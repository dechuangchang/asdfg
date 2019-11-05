import React, { Component } from 'react';
import {TextInput,Text,View,StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      text:''
    };
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
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
  input:{
    borderWidth:1,
    borderColor:'red',
  }
})