import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';

const Dashboard = (props) => {

    return (
        <View style ={styles.container}>
            <StatusBar backgroundColor='#0BDB8F' barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <View style ={styles.itemPosition}>
                    <TouchableOpacity 
                        style ={styles.button}
                        onPress ={() =>props.navigation.navigate('MovieList')}
                    >
                        <Text style ={styles.buttonText}>MOVIE{'\n'}LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={styles.button}
                        onPress ={() =>props.navigation.navigate('UserList')}
                    >
                        <Text style ={styles.buttonText}>USER{'\n'}LIST</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style ={styles.lowerScreen}>
                <View style ={styles.itemPosition}>
                    <TouchableOpacity 
                        style ={styles.button}
                        onPress ={() =>props.navigation.navigate('AddMovie')}
                    >
                        <Text style ={styles.buttonText}>ADD{'\n'}MOVIE</Text>
                    </TouchableOpacity>
                </View>
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
        flex : 0.5,
        justifyContent : 'flex-start'
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
        borderColor : '#0BDB8F',
        borderBottomWidth : 4
      },
      buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#303326',
        textAlign : 'center',
        alignSelf : 'center'
      },
});

export default Dashboard;