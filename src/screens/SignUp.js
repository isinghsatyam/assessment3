import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StatusBar,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {addUserToDatabase} from '../database/UserDataHandler';
import SwitchSelector from 'react-native-switch-selector';


const SignUp = (props) => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const usernameReg = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    const passwordReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, SetUserType] = useState('');
    
    const onSubmit = async () =>{
        try{
            if(username == null || email == null || password == null){
                alert('please fill all the fields')
            }
            else if (usernameReg.test(username) !== true){
              alert('please enter valid username')
            }
            else if(emailReg.test(email) !== true ){
              alert('Please enter valid email address!!')
            }
            else if(passwordReg.test(password) !== true ){
                alert('Please enter valid password!!')
              }
            else {    
                
                const userDetail = {  
                    username : username,
                    email : email,
                    password : password,
                    userType : userType,
                }
                console.log(userDetail)
                await addUserToDatabase(userDetail);
                alert('your credential is stored');
                props.navigation.navigate('SignIn')
            }     
        }
        catch(error){
            alert(error)
        }
    }

    return (
        <KeyboardAwareScrollView 
        style ={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
            <StatusBar backgroundColor="#0BDB8F" barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <Text style={styles.headingText}>Register here !</Text>
            </View>
            <View style ={styles.centerScreen}>
                <View style={styles.pickerPosition}>
                <SwitchSelector
                    initial={0}
                    onPress={(value) => SetUserType(value)}
                    textColor="#1a1c1c"
                    fontSize = {20}
                    selectedColor="#1a1c1c"
                    buttonColor="#0BDB8F"
                    borderColor="#1a1c1c"
                    hasPadding
                    options={[
                    {label: 'User', value: 'user'},
                    {label: 'Admin', value: 'admin'},
                    ]}
                />
                </View>
                <View style={styles.itemPosition}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
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
                        name='email'
                        color='#5C5C5C'
                        size = {25}
                    />
                    <TextInput
                        placeholder= "Email id"
                        //value= {emailinput}
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        onChangeText ={email => setEmail(email)}
                    />             
                </View>
                <View style={styles.itemPosition}>
                    <MaterialCommunityIcons
                        name='lock-outline'
                        color='#05375a'
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
                <TouchableOpacity 
                style={styles.button}
                onPress = {onSubmit}
                >
                    <Text style={styles.buttonText}>Create an Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('SignIn')}
                    >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff',
        paddingTop : 30
    },
    upperScreen :{
        flex: 0.1,
        backgroundColor : '#ffffff',
        justifyContent : 'center',
    },
    centerScreen :{
        flex : 0.6,
        marginTop :10,
        paddingHorizontal: 25,
        justifyContent : 'center'
    },
    lowerScreen :{
        flex : 0.3,
        backgroundColor : '#ffffff',
        paddingHorizontal: 25,
        marginTop : 20,
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
        marginTop: 10,
        marginBottom: 10,
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

export default SignUp;