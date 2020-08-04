import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StatusBar,
    Picker
} from 'react-native';

const UserList = () => {

    return (
        <View style ={styles.container}>
            <StatusBar backgroundColor='#0BDB8F' barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <Text style ={styles.buttonText}>User LIST</Text>
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff'
    },
    upperScreen :{
        flex: 0.5,
        justifyContent : 'center'
    },
    lowerScreen :{
        flex : 0.5
    },
    itemPosition:{
        flexDirection:'row',
        paddingTop: 15,
        paddingBottom: 30,
        alignSelf : 'center'
      },
      button: {
        width: '100%',
        height: 100,
        width : 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
        backgroundColor: '#d3e602',
        borderColor : '#5C5C5C'
      },
      buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#303326',
        textAlign : 'center'
      },
});

export default UserList;