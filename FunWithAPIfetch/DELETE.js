import { response } from 'express';
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

class DelApi extends Component {

  deleteApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {method:'DELETE'})
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>this.deleteApi()} style={styles.touchOpacity}>
        <Text style={styles.allText}>Hapus Data</Text>
      </TouchableOpacity>
    )
  }
}

export { DelApi }