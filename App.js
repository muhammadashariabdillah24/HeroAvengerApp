/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './StylingAPIfetch/Style';

import { Swittch, Swittch2 } from './Latihan/Switch';

import { Activity } from './ActivitiIndicator/activity';

import { Toastandroid } from './ToastAndroid/toastAndroid';

import { Latihan } from './Latihan/Async';

// import { PostData } from './Latihan/Async';
// // AsyncStorage Example
// import styles from './StylingAPIfetch/Style';

// import { SaveData } from './AsyncStorage/AsyncStorage';

// // Style From API AXIOS

// import styles from './StylingAPIfetch/Style';

// // DELETE
// import { DeleteApi } from './FunWithAPIaxios/DELETE';

// // GET
// import { GetApi } from './FunWithAPIaxios/GET';

// // POST
// import { PostApi } from './FunWithAPIaxios/POST';

// // EDIT
// import { EditApi } from './FunWithAPIaxios/PUT';

// STYLING

// // Style From API FETCH
// import styles from './StylingAPIfetch/Style';

// // GET
// import { GetApi } from './FunWithAPIfetch/GET';

// // POST
// import { PostApi } from './FunWithAPIfetch/POST';

// // PUT
// import { PutApi } from './FunWithAPIfetch/PUT';

// // DELTE
// import { DelApi } from './FunWithAPIfetch/DELETE';

// Class FunWithAPIfetch

// class App extends Component {

//   render() {
//     return (
//       <View style={styles.containerDefault}>
//         <PostApi />
//         <DelApi />
//         <GetApi />
//         <PutApi />
//       </View>
//     )
//   }
// }

// Class FunWithAPIaxios

// class App extends Component {

//   render() {
//     return (
//       <View style={styles.containerDefault}>
//         <GetApi />
//         <PostApi />
//         <EditApi />
//         <DeleteApi />
//       </View>
//     )
//   }
// }

class App extends Component {

  render() {
    return (
      <View style={styles.containerDefault}>
        {/* <PostData/> */}
        <Latihan nama="Ashari"/>
        <Swittch />
        <Swittch2 />
        <Activity />
        <Toastandroid />
      </View>
    )
  }
}

export default App;
