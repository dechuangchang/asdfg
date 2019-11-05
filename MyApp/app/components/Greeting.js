import React, { Component } from 'react';
import {Text} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    
  }
  render() {
    let {name} = this.props;
    const color = Platform.select({
      ios: {color:'red'},
      android:{color:'blue'},
    });
    return (
      <Text style={color}>Hello {name}!</Text>
    );
  }
}