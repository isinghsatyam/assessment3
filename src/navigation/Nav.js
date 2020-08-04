import React from 'react';
import {View,TouchableOpacity,} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/Dashboard';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SignOut from '../screens/SignOut';
import UserList from '../screens/UserList';
import MovieList from '../screens/MovieList';
import AddMovie from '../screens/AddMovie';

const DrawerNavigation = createDrawerNavigator({
    Dashboard : Dashboard,
    SignOut : SignOut
})

const StackNavigator = createStackNavigator({
    Dashboard : DrawerNavigation,
    UserList : UserList,
    MovieList : MovieList,
    AddMovie : AddMovie

    },
    {
    defaultNavigationOptions:{
        headerShown: true,
        headerStyle :{
            borderBottomColor : '#0BDB8F',
            borderBottomWidth: 3,
        },
        headerTitleStyle:{
            color : '#5C5C5C'
        },
    }
}
);

const SwitchNavigator = createSwitchNavigator(
    { 
        //AuthResolve : AuthResolve,
        SignIn : SignIn,
        SignUp : SignUp,
        Stack : StackNavigator,
        //SignOut : SignOut
    },
    {
      initialRouteName: 'SignIn',
    },
    {
        defaultNavigationOptions:{
            headerShown: false
        }
    }
);

export default createAppContainer(SwitchNavigator);
