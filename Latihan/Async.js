import AsyncStorage from '@react-native-async-storage/async-storage';
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
  Image,
  TextInput,
  FlatList,
  Picker
} from 'react-native';

// Styling
import styles from '../StylingAPIfetch/Style';


// class PostData extends Component {

    
//     constructor(){
//         super()

//         this.state = {
//             isi : '',
//             get : ''
//         }

//     }

//     setData = () => {
//         if(this.state.isi){
//             AsyncStorage.setItem('key', this.state.isi)
//             this.setState({
//                 isi : ''
//             })
//             Alert.alert('Data Di Simpan')
//         } else {
//             Alert.alert('Data Tidak Disimpan')
//         }
//     }

//     getData = () => {
//         AsyncStorage.getItem('key')
//         .then(value => {
//             this.setState({
//                 get : value.split(' ')
//             })
//         })
//     }

//     viewData = () => {

//         return(
//             this.state.get
//         )
//     }

//     render() {
//         return (
//                 <View style={styles.containerHeader}>
//                     <TextInput 
//                         placeholder="Masukan Inputan"
//                         placeholderTextColor="grey"
//                         onChangeText={data => this.setState({isi : data})}
//                         style={{padding : 10,alignSelf : 'center',margin : 10}}
//                     />

//                     <TouchableOpacity style={styles.touchOpacity}
//                     onPress={this.setData}>
//                         <Text style={styles.allText}>SET DATA</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.touchOpacity}
//                     onPress={this.getData}>
//                         <Text style={styles.allText}>GET DATA</Text>
//                     </TouchableOpacity>
//                     <View style={styles.allWrapper}>
//                         <Text style={styles.allText}>{this.state.get}</Text>
//                     </View>
//                 </View>
//         )
//     }
// }

// export { PostData }

class Latihan extends Component {

    getApi = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            this.setState({
                isi : response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){

        this.getApi()
    }

    constructor(props){
        super(props)

        this.state = {
            
            isi : [],
            get : [],
            ex : this.props.nama,
            namaKota : ''
        }
    }

    setData = () => {
        if(this.state.isi){
            this.state.isi.map((value, index) => {
                AsyncStorage.setItem('keys', value.email)
                this.setState({
                    isi : value.email
                })
                console.log(value.email);
            })
            Alert.alert('Data Di Simpan')
        } else {
            Alert.alert('Data Tidak Disimpan')
        }
    }

    getData = () => {
        AsyncStorage.getItem('keys')
        .then(value => {
            this.setState({
                get : value
            })

            Alert.alert('Data Berhasil Diambil')
            console.log(this.state.get);
        })
    }

    render() {
        return (
                <View style={styles.containerHeader}>
                    <TouchableOpacity style={styles.touchOpacity}
                    onPress={this.setData}>
                        <Text style={styles.allText}>SET DATA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchOpacity}
                    onPress={this.getData}>
                        <Text style={styles.allText}>GET DATA</Text>
                    </TouchableOpacity>
                    <View style={styles.allWrapper}>
                        <Text style={styles.allText}>
                            {this.state.get}
                        </Text>
                        <Picker
                        selectedValue={this.state.namaKota}
                        onValueChange={(item) => this.setState({namaKota : item})}
                        style={styles.stylePicker}
                        >
                        <Picker.Item label="Daftar Nama Kota"/>
                        <Picker.Item label="Kota Jakarta" value="Jakarta" />
                        <Picker.Item label="Kota Bogor" value="Bogor" />
                        <Picker.Item label="Kota Bekasi" value="Bekasi" />
                        </Picker>
                        <Text style={styles.allText}>{this.state.namaKota}</Text>
                        {/* <Text style={styles.allText}>
                            {this.state.isi}
                        </Text> */}
                    </View>
                </View>
        )
    }
}

export { Latihan }