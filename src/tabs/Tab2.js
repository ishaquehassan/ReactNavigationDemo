import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';

export default class Tab2 extends Component {
    static navigationOptions = {
        title:"Home Two",
        tabBarIcon:(
            <Image source={require('./../images/home.png')} style={{width:20,height:20}} />
        )
    };

    render() {
        return (
            <View style={{flex: 1,backgroundColor:"#0f0"}}>
                <Text>Tab2</Text>
            </View>
        );
    }
}
