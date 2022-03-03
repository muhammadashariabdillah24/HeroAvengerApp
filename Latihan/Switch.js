import React, { Component, useState } from 'react';
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
  TextInput,
  FlatList,
  Picker,
  Switch
} from 'react-native';

// Style
import styles from '../StylingAPIfetch/Style';

class Swittch extends Component {

    state = {
        kondisi : true
    }

    aksi = (param) => {
        this.setState({
            kondisi : param 
        })
    }

    render(){
        return(
            <View style={styles.containerBody}>
                <Text>{this.state.kondisi ? 'Hidup':'Mati'}</Text>
                <Switch
                    onValueChange = {this.aksi}
                    value = {this.state.kondisi}
                />
            </View>
        )
    }
}

const Swittch2 = () => {

    const [isEnable, setIsEnable] = useState(true);
    const toggleSwitch = () => setIsEnable(previousState => !previousState)

    return(
        <View>
            <Switch 
                trackColor={{true : '#767577', false : '#81b0ff'}}
                thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnable}
            />
            <Text>{isEnable ? 'Hidup':'Mati'}</Text>
        </View>
    )
}



export { Swittch, Swittch2 }