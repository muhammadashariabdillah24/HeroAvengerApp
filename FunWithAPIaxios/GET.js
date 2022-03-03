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

class GetApi extends Component { 

    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
            this.setState({
                User : response.data
            })
        })
        .catch(error => {
            console.error(error);
        })
    }

    componentDidMount(){
        this.getData()
    }

    constructor(){
        super()
        this.state = {
            User : []
        }
    }

    listApi = () => {

        return this.state.User.map((value, index) => {
            return (
                <View style={styles.allWrapper} key={index}>
                    <Text style={styles.allText}>{value.id}</Text>
                    <Text style={styles.allText}>{value.name}</Text>
                </View>
            )
        })
    }

    render(){
        return(

            <SafeAreaView style={styles.containerApiGet}>
                <ScrollView style={styles.containerHeader}>
                {this.listApi()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export { GetApi }