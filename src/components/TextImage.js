import React, { Component } from 'react';
var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    PixelRatio,
    Dimensions
} = require('react-native')


var screenWidth = Dimensions.get('window').width;


export default class TextImageWidget extends Component{

    constructor(props) {
        super(props);
    }

    _renderRow() {
        return (
            <View style={styles.rowContainer}  >
                <View style={styles.row}>
                    <Text
                        numberOfLines={1}
                        style={styles.textInputTitle} >
                        {this.props.title}
                    </Text>
                    <View style={styles.textImage}>
                        <Image source={require('../img/account.png')} style={styles.image} />
                    </View>
                    <View style={styles.rightArrow}>
                        <Image source={require('../img/rightArrow.png')} style={{width:24 , height:24}}/>
                    </View>
                </View>
            </View>
        );

    }

    render() {
        return this._renderRow();
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        backgroundColor: '#FFF',
        width:screenWidth,
    },
    row: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        //paddingTop:15,  
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor:'gray',//需要标色  

    },
    textInputTitle: {
        width: 80,
        fontSize: 16,
        //color: '#333',  
        //backgroundColor: 'red',  
    },
    textImage: {
        position:"relative",
        flex: 1,
        height: 40,// @todo should be changed if underlined  
        width:40,
        justifyContent:'flex-end',
        flexDirection: 'row',

    },
    image:{
        width:30,
        height:30,
        backgroundColor:'white',
        borderRadius: 19,
        alignSelf: "center"
    },
    rightArrow:{
        paddingLeft:10,
        //backgroundColor:'red',  

    }

});  