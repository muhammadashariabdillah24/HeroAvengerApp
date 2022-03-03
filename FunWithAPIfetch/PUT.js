import React, { Component } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  Image
} from 'react-native';
import styles from '../StylingAPIfetch/Style';

class PutApi extends Component {

  editApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method : 'PUT',
      body : JSON.stringify({
        userId : 1,
        id : 1,
        title : 'Muhammad Ashari Abdillah',
        completed : false
      }),
      headers : {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render(){
    return(
      <TouchableOpacity onPress={() => this.editApi()} style={styles.touchOpacity}>
        <Text style={styles.allText}>Edit Data Api</Text>
      </TouchableOpacity>
    )
  }
}

export { PutApi }