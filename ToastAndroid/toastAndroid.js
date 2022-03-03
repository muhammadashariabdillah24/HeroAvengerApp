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
  ToastAndroid
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Toastandroid extends Component {

    toastAndroidWithDuration = () => {
        ToastAndroid.show('Aku Adalah Toast Dengan Duration', ToastAndroid.LONG)
    }

    toastAndroidDurationWithGravity = () => {
        ToastAndroid.showWithGravity(
            'Aku adalah Toast Dengan Gravity',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    toastAndroidDurationWithGravityOffsetHandler = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Aku adalah toast dengan gravity dan offset',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            50,
            50
        )
    }

    render() {
        return (
            <View>
                <Button 
                    title="Aku Toast Android Paling Simple"
                    onPress={this.toastAndroidWithDuration}
                />


                <Button 
                    title="Aku Toast Android Dengan Gravity"
                    onPress={this.toastAndroidDurationWithGravity}
                />

                <Button 
                    title="Aku Toast Android Dengan Gravity Dan Offset"
                    onPress={this.toastAndroidDurationWithGravityOffsetHandler}
                />
            </View>
        )
    }
}

export { Toastandroid }