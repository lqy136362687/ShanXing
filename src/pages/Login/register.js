
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Text,
    AppRegistry,
    StyleSheet,
    TextInput,
    RefreshControl,
    Image,
    ScrollView,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import screen from '../../common/screen';
import LoginNavi from '../../components/loginNavigator';

let screenWidth = screen.width;
let screenHeight = screen.height;
import Update from './updateInfo';
export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password1:'',
            password2:''
        };
        this.reg=this.reg.bind(this);
        navigation = this.props.navigation;
    }
    testUsername=()=>{
        alert("username:"+this.state.username);
    };
    reg(){
        alert(this.state.username);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={RegStyle.container}>
                <View style={RegStyle.Frame}>
                    <TextInput style={RegStyle.textInput}  placeholderTextColor="#a6a6a6" placeholder="请输入用户名"  OnBlur={()=>this.testUsername()} onChangeText={(username) => this.setState({username})}/>
                    <TextInput style={RegStyle.textInput}  placeholderTextColor="#a6a6a6" clearButtonMode="while-editing" secureTextEntry  placeholder="请输入密码" onChangeText={(password1) => this.setState({password1})}/>
                    <TextInput style={RegStyle.textInput}  placeholderTextColor="#a6a6a6" clearButtonMode="while-editing" secureTextEntry placeholder="请再次输入密码" onChangeText={(password2) => this.setState({password2})}/>
                    <TouchableOpacity style={RegStyle.button} onPress={()=> {navigate('Update')}}>
                        <Text style={{position:'relative',alignSelf:'center',color:"white" ,fontSize:16}}>注册</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

};
const RegStyle = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
    },
    Frame:{
        flex:1,
        position:'relative',
        backgroundColor:"white",
        top:40,
        width:screenWidth*0.8,
        alignSelf:"center"
    },
    textInput:{

        justifyContent:"center",
        top:10,
        height:50 ,
        fontSize:17,
    },
    button:{
        width:screenWidth*0.6,
        height:40,
        backgroundColor: "#4DB6AC",
        alignContent:"center",
        justifyContent:"center",
        top:40,
        alignSelf:'center',
        borderRadius:10
    }
});

AppRegistry.registerComponent('huProject',()=>Register);

// class TextInputH extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             focus:false
//         }
//     }
//     render(){
//         let color=this.state.focus ?"#4DB6AC":"#a6a6a6";
//         return(
//             <TextInput style={RegStyle.textInput} underlineColorAndroid={color} placeholderTextColor="#a6a6a6" placeholder={this.props.name} OnFocus={()=>this.setState({focus:true})}
//                        OnBlur={()=>{this.setState({focus:false}); }}
//                        />
//         );
//     }
// }