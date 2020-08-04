import React, {useEffect} from 'react';

const AuthResolve = (props) => {
    const tokenTemp ='';
    useEffect( () =>{
        const checkToken = async () =>{
            const tokenTemp = await AsyncStorage.getItem('token')
            if(tokenTemp !== null)
                {
                    props.navigation.navigate('Home')
                }
            else{
                props.navigation.navigate('SignIn') 
            }
        }
        checkToken();      
    })

    return null;
}

export default AuthResolve;