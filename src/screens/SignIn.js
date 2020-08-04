import React, {useState , useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {userInfo} from '../database/Schemas';
import Realm from 'realm';



const SignIn = (props) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const getData = async () => {
        try{
            const realm = new Realm({schema: [userInfo]})
            const userDetail = realm.objects('user_info')
            console.log(userDetail)
            if(username == null || password == null){
                alert('please fill all the fields')
            }
            else {
                for(let checkUser of userDetail){
                    if(checkUser.username === username && checkUser.password === password){
                        props.navigation.navigate('Dashboard');
                    }  
                }          
            }     
        }
        catch(error){
            alert(error)
        }
    }

    return (
        // <KeyboardAwareScrollView 
        // style ={styles.container}
        // resetScrollToCoords={{ x: 0, y: 0 }}
        // scrollEnabled={false}
        // >
        <View style={styles.container}>
            <StatusBar backgroundColor="#0BDB8F" barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <Text style={styles.headingText}>WELCOME!</Text>
                <Text style={styles.bodyText}>Please sign in to continue...</Text>
            </View>
            <View style ={styles.centerScreen}>
                <View style={styles.itemPosition}>
                    <FontAwesome
                        name='user-o'
                        color='#5C5C5C'
                        size = {25}
                    />
                    <TextInput
                        placeholder= "Username"
                        autoCapitalize = 'none'
                        style = {styles.textInput}
                        onChangeText = {username => setUsername(username)}
                        
                    />
                </View>
                <View style={styles.itemPosition}>
                    <MaterialCommunityIcons
                        name='lock-outline'
                        color='#5C5C5C'
                        size = {25}
                    />
                    <TextInput
                        placeholder= "Enter your Password"
                        secureTextEntry={true}
                        autoCapitalize = 'none'
                        style = {styles.textInput}    
                        onChangeText = {password => setPassword(password)}
                    />
                 </View>
            </View>
            <View style ={styles.lowerScreen}>
            <TouchableOpacity style={styles.button}
                onPress={getData}
                >   
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() =>props.navigation.navigate('SignUp')}
                    >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff',
        paddingTop : 20
    },
    upperScreen :{
        flex: 0.2,
        backgroundColor : '#ffffff',
        justifyContent : 'center',
        margin : 10,
    },
    centerScreen :{
        flex : 0.4,
        marginTop:30,
        paddingHorizontal: 25,
        justifyContent : 'center'
    },
    lowerScreen :{
        flex : 0.4,
        backgroundColor : '#ffffff',
        paddingHorizontal: 25,
        justifyContent : 'flex-start'
    },
    itemPosition:{
        flexDirection:'row',
        paddingTop: 15,
        paddingBottom: 30,
        alignContent : 'center',
        alignSelf : 'center'
      },
    pickerPosition :{
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom : 20,
 
        
      },
    headingText :{
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 35,
        color : '#0BDB8F',
        paddingBottom : 5
    },
    bodyText :{
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 20,
        color : '#5C5C5C'
    },
    textInput : {
        flex:1,
        marginTop : -14,
        paddingLeft: 10,
        color: '#5C5C5C',
        fontSize: 20,
        borderBottomColor : '#0BDB8F',
        borderBottomWidth : 3
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 30,
        backgroundColor: '#0BDB8F'
      },
      buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5C5C5C'
      },
      picker :{
          height : 40,
          width : 120,
          borderWidth : 2,
          borderColor : '#0BDB8F',
          
      }
});

export default SignIn;