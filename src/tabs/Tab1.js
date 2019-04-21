import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';

export default class Tab1 extends Component {
    static navigationOptions = {
        title:"Home One",
        tabBarIcon:(
            <Image source={require('./../images/home.png')} style={{width:20,height:20}} />
        )
    };

    render() {
        return (
            <View style={{flex: 1,backgroundColor:"#f00"}}>
                <Text>Tab1</Text>
            </View>
        );
    }
}
