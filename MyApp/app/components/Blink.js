import React, { Component } from 'react';
import {Text,StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      showText: true 
    };
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        showText:!this.state.showText
      })
    },1000)
  }
  render() {
    return (
      <Text style={this.state.showText ? styles.red:styles.blue}>Hello {this.props.name}!</Text>
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