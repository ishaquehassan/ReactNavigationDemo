import React, {Component} from 'react';
import {View, Image,Button,TouchableOpacity} from 'react-native';
import {DrawerActions} from "react-navigation";
import BottomTabs from "../BottomTabs";

export default class Home extends Component {
    static navigationOptions = (props)=>(
        {
            title:"Home",
            headerLeft:(
                <TouchableOpacity style={{paddingHorizontal:20}} onPress={()=>{
                    props.navigation.dispatch(DrawerActions.openDrawer())
                }}>
                    <Image source={require('./../images/menu2.png')} style={{width:30,height:30,tintColor: "#fff"}} />
                </TouchableOpacity>
            )
        }
    );

    render() {
        return (
            <View style={{flex: 1}}>
               <BottomTabs/>
            </View>
        );
    }
}
