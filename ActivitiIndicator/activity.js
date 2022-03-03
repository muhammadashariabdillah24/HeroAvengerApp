import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styles from "../StylingAPIfetch/Style";

class Activity extends Component {

    render() {
        return (
            <View style={styles.styleHorizontal}>
                <ActivityIndicator />
                <ActivityIndicator size="large" color='deepskyblue'/>
                <ActivityIndicator size="small" color='#0000ff'/>
                <ActivityIndicator size="large" color="#00ff00"/>
            </View>
        )
    }
}

export { Activity }