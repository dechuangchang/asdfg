import React, { Component } from 'react';
import {ScrollView,Text} from 'react-native';

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
      <ScrollView>
        {
          [1,2,3,4,5,6,7,8,9,0,11,12,13,14].map((item)=><Text key={item} style={{padding: 10, fontSize: 42}}>{item}</Text>)
        }
      </ScrollView>
    );
  }
}