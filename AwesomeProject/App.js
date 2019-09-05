import React, { Component } from 'react';
import { Text, View ,Platform,Dimensions,ScrollView} from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShowingText: 0 
    };

    
  }
  componentDidMount (){
  }
  render() {
    return (
      <ScrollView  style={{height:1900}} >
        <View style={{height:900,flexDirection: 'row',}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
          <Text>2</Text>
        </View>
        <View style={{height:900,flexDirection: 'row',marginTop:20}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
          <Text>6</Text>
        </View>
      </ScrollView>
    );
  }
}

