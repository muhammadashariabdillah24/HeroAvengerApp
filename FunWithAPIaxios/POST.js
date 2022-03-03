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


class PostApi extends Component {

    sendData = () => {
        const sendData = {
            title : 'Abdillah7997',
            body : 'Santri Pondok Programmer',
            userId : 1
        }
    
        axios.post('https://jsonplaceholder.typicode.com/users', {sendData})
        .then(res => {
            console.log(res.data);
            Alert.alert(JSON.stringify(res.data))
        })
        .catch(error => {
            console.error(error);
        })
    }

    render(){

        return(
            <View style={styles.containerApiPost}>
                <View style={styles.containerBody}>
                    <TouchableOpacity onPress={() => this.sendData()} style={styles.touchOpacity}>
                        <Text style={styles.allText}>POST DATA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export { PostApi }