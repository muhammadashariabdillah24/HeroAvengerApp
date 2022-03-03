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
  Image,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from '../StylingAPIfetch/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class SaveData extends Component {

    constructor(){
        super()

        this.state = {
            textInput : '',
            getValue : ''
        }
    }

    saveValues = () => {
        if(this.state.textInput){
            AsyncStorage.setItem('any_key_here', this.state.textInput)
            this.setState({textInput : ''})
            Alert.alert('Data Di Simpan')
        } else {
            Alert.alert('Data Belum Disimpan, Tolong Ulangi')
        }
    };

    getValues = () => {
        AsyncStorage.getItem('any_key_here')
        .then(value => 
            this.setState({getValue : value})
        )
    }

    render(){

        return(
            <View style={styles.containerDefault}>
                <View style={styles.containerBody}>
                    <TextInput 
                        placeholder="Masukan apapun itu"
                        placeholderTextColor="deepskyblue"
                        value={this.state.textInput}
                        onChangeText={data => this.setState({textInput : data})}
                        underlineColorAndroid="transparent"
                        style={styles.styleTextInput}
                    />

                    <TouchableOpacity
                    onPress={this.saveValues}
                    style={styles.touchOpacity}>
                        <Text style={styles.allText}>SIMPAN DATA!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={this.getValues}
                    style={styles.touchOpacity}>
                        <Text style={styles.allText}>AMBIL DATA!</Text>
                    </TouchableOpacity>

                    <Text style={styles.allText}>{this.state.getValue}</Text>
                </View>
            </View>
        )

    }
}

export { SaveData }