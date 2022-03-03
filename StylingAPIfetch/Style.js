import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerDefault : {
        flex : 1,
        backgroundColor : 'ghostwhite',
    },
    containerApiGet : {
        flex : 1,
        backgroundColor : 'ghostwhite',
        flexDirection : 'column'
    },
    containerApiPost : {
        flex : 1,
        backgroundColor : 'ghostwhite',
        flexDirection : 'column'
    },
    containerApiPut : {
        flex : 1,
        backgroundColor : 'ghostwhite',
        flexDirection : 'column'
    },
    containerApiDelete : {
        flex : 1,
        backgroundColor : 'ghostwhite',
        flexDirection : 'column'
    },
    containerHeader : {
        flex : 3,
        backgroundColor : 'blue',
        alignContent : 'center'
    },
    containerMain : {
        flex : 3,
        backgroundColor : 'gray',
        alignContent : 'center'
    },
    containerBody : {
        flex : 4,
        backgroundColor : 'green',
        alignContent : 'center'
    },
    containerFooter : {
        flex : 3,
        backgroundColor : 'red',
        alignContent : 'center'
    },
    allWrapper : {
        flexDirection : 'row',
        margin : 10,
    },
    allText : {
        textAlign : 'center',
        textShadowColor : 'deepskyblue',
        marginLeft : 5
    },
    stylePicker : {
        width : '100%',
        color : '#fff',
        fontWeight : 'bold'
    },
    touchOpacity : {
        padding : 30,
        borderRadius : 10,
        backgroundColor : 'dodgerblue'
    },
    styleToast : {
        justifyContent : 'space-between',
        margin : 20

    }


})

export default styles