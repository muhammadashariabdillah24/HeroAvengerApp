import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'ghostwhite',
    },
    containerContent : {
        margin : 10
    },
    imageForLogo : {
        width : 50,
        height : 50,
        padding : 10
    },
    header : {
        flex : 3,
        padding : 10,
        backgroundColor : 'limegreen',
        alignItems : 'center',
    },
    navigation : {
        
    },
    body : {
        flex : 5,
        backgroundColor : 'red',
        flexDirection : 'row'
    },
    bodyRight : {
        flex : 1,
        backgroundColor : 'ghostwhite',
    },
    styleHorizontal : {
        flexDirection : 'row',
        justifyContent : 'center',
        padding : 10
    },
    changeSize : {
        fontSize : 200
    },
    contentRight : {
        alignItems : 'center',
        paddingTop : 10
    },
    textContentRight : {
        lineHeight : 30,
        textAlign : 'right'
    },
    bodyLeft : {
        flex : 1,
        backgroundColor : 'yellow'
    },
    contentLeft : {
        alignItems : 'center',
        paddingTop : 10
    },
    textContentLeft : {
        lineHeight : 30,
        textAlign : 'left'
    },
    button : {
        backgroundColor : 'dodgerblue',
        margin : 20,
        borderRadius : 10
    },
    buttonText : {
        padding : 10,
        textAlign : 'center',
        color : '#fff'
    },
    footer : {
        flex : 1,
        backgroundColor : 'yellow'
    }
});

export { styles }