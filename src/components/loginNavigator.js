import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native';
import screen from '../common/screen';

let ScreenWidth = screen.width;

class LoginNavigator extends Component {

    render() {
        var dataSource = this.props.dataSource;
        return (
            <View style={styles.container}>
                <Image source={require('../img/return.png')} style={styles.icon}/>
                <Text style={styles.text}>{ dataSource.title }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4DB6AC',
        height:40,
        width:ScreenWidth,
        borderBottomWidth:0.5,
        borderBottomColor: "#111",
        justifyContent:'center'
    },
    text:{
        justifyContent:'center',
        textAlign:"center",
        fontSize:20,
        color:"#fff",

    },
    icon:{
        position:'absolute',
        left:10,
        width:20,
        height:20,
    }
});
module.exports= LoginNavigator;