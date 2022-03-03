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

class EditApi extends Component {

  editData = () => {
    const body = {
      userId : 1,
      id : 10,
      title : 'Abdillah7997',
      completed : true
    }
    axios.put('https://jsonplaceholder.typicode.com/todos/10', {body})
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      console.error(error);
    })
  }

  render() {
    return (
      <View style={styles.containerApiPut}>
        <View style={styles.containerBody}>
          <TouchableOpacity onPress={() => this.editData()} style={styles.touchOpacity}>
            <Text style={styles.allText}>EDIT DATA</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export { EditApi }