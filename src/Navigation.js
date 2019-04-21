import React from 'react';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from "react-navigation";
import Home from "./screens/Home";
import About from "./screens/About";
import LeftDrawerView from "./LeftDrawerView";

const StackNav = createStackNavigator({
    Screen1:{
        screen:Home
    },
    Screen2:{
        screen:About
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#000"
        },
        headerTintColor:"#fff"
    }
});

const MainAppDrawer = createDrawerNavigator({
    MainScreen:{screen:StackNav}
},{
    contentComponent:(props)=><LeftDrawerView navigation={props.navigation} />
});

export default createAppContainer(MainAppDrawer)