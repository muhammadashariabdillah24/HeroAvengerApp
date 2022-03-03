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

class PostApi extends Component {

    postApi = () => {
        let dataSending = {title:'Muhammad Ashari Abdillah',body:'Santri Pondok IT',id:101};

        let formBody = [];

        for (let key in dataSending) {
            let encodedKey = encodeURIComponent(key)
            let encodedValue = encodeURIComponent(dataSending[key])

            formBody.push(`${encodedKey} = ${encodedValue}`);
        }

        formBody = formBody.join(' | ');

        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, {
            method : "POST",
            body : formBody,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(JSON.stringify(responseJson));
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render(){
        return(
            <View style={styles.containerApiPost}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={() => this.postApi()} style={styles.touchOpacity}>
                        <Text style={styles.allText}>Kirim Data</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export { PostApi }