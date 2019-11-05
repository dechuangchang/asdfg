import React, { Component } from 'react';
import {Image} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    
  }
  render() {
    let {src,style} = this.props;
    return (
      <Image source={src} style={style} />
    );
  }
}