import React, { Component } from 'react';
import {FlatList,Text,StyleSheet,SectionList} from 'react-native';

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
      <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      // <FlatList
      //   data={[
      //     {key: 'Devin'},
      //     {key: 'Jackson'},
      //     {key: 'James'},
      //     {key: 'Joel'},
      //     {key: 'John'},
      //     {key: 'Jillian'},
      //     {key: 'Jimmy'},
      //     {key: 'Julie'},
      //     {key: '1'},
      //     {key: '2'},
      //     {key: '3'},
      //     {key: '4'},
      //     {key: '5'},
      //     {key: '6'},
      //     {key: '7'},
      //     {key: '8'},
      //     {key: '11'},
      //     {key: '211'},
      //     {key: '31'},
      //     {key: '41'},
      //     {key: '51'},
      //     {key: '61'},
      //     {key: '71'},
      //     {key: '81'},
      //   ]}
      //   renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      // >
        
      // </FlatList>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})