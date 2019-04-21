import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {DrawerActions} from "react-navigation";

export default class LeftDrawerView extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
                <Button title={"Goto About"} onPress={()=>{
                    this.props.navigation.navigate("Screen2")
                }} />

                <Button title={"Close Drawer"} onPress={()=>{
                    this.props.navigation.dispatch(DrawerActions.closeDrawer())
                }} />
            </View>
        );
    }
}
