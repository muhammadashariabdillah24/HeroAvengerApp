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

    getApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method : 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                User : responseJson
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    componentDidMount(){
        this.getApi()
    }

    constructor(props){
        super(props)
        this.state = {
            User : []
        }
    }

    listApi = () => {
       
        return this.state.User.map((value, index) => {
           return (
            //    Jika key={index} maka kode akan error
            // Karna key={index} adalah key dari API
               <View style={styles.allWrapper} key={index}>
                   <Text style={styles.allText}>{value.id}</Text>
                   <Text style={styles.allText}>{value.name}</Text>
                   <Text style={styles.allText}>{value.email}</Text>
               </View>
           )
       })
    }

    render(){
        return (
            <View style={styles.containerApiGet}>
                <View style={styles.containerBody}>
                    {this.listApi()}
                </View>
            </View>
        )
    }
}

export { GetApi }