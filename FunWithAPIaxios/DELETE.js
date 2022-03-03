import axios from 'axios';
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

class DeleteApi extends Component {

  deleteData = () => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/5')
    .then(json => console.log(json.data))
  }

  render() {
    return (
      <View style={styles.containerFooter}>
        <TouchableOpacity onPress={() => this.deleteData()} style={styles.touchOpacity}>
          <Text style={styles.allText}>DELETE DATA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export { DeleteApi }
