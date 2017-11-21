//import router from '../../../router';
import axios from 'react-native-axios';
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

import Register from './register';
import Update from './updateInfo';
import Canteen from '../MainContent/Canteen';
import CanteenDetail  from  '../MainContent/CanteenDetails';
import Me  from  '../PersonInformation/Me';
import MeChildren  from  '../PersonInformation/MeChildren';
import MeLove  from  '../PersonInformation/MeLove';
import MeReview  from  '../PersonInformation/MeReview';
import MeGoal  from  '../PersonInformation/MeGoal';
import Meset  from  '../PersonInformation/Meset';
import DishDetail from '../MainContent/dishDetail'

axios.defaults.baseURL = 'http://172.20.10.11:8080/com.uestc.www.app';

let screenWidth = screen.width;
let screenHeight = screen.height;
let navigation=null;
 class Login extends Component {

    constructor(props){
        super(props);
  //      this.login=this.login.bind(this);
        this.state = {
            username:'',
            password:'',
            selectedTab: '首页',
        };
        navigation = this.props.navigation;
    }

    state={
        isRefreshing: true
    };

    // login(){
    //
    //     if(this.state.username==''||this.state.password==''){
    //         alert('请填写密码和用户名');
    //     }else {
    //         //let formData = new JSON();
    //         // formData.append('user', {
    //         //     "username": this.state.username,
    //         //     "pwd":this.state.password
    //         // });
    //         let options={};
    //         options.body='username=abc&key2=123456'
    //         options.headers={
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         };
    //         options.method='POST';
    //         alert(axios);
            // axios.post('/user/login',{
            //     username:'abc',
            //     pwd:'123456'
            // }).then(function(response){
            //     alert(response);
            //     }
            // ).catch((error)=>{
            //     alert(error);
            // })
    //          fetch('http://113.54.198.200:8080/com.uestc.www.app/user/login?username=abc&pwd=123456', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type':global.constants.contentType,
    //                 'HOST':'localhost'
    //             },
    //             body: JSON.stringify({
    //                 "user":{
    //                     "username": this.state.username,
    //                      "pwd": this.state.password
    //                 }
    //                 //"state":'1'
    //             })
    //          }
    //         ).then((response)=>response)
    //             .then((responseData)=>{
    //                 alert("responseData:"+responseData);
    //                 // let right=responseData.right;
    //                 // global.constants.userId=responseData.userId;
    //                 // if(right) {
    //                 //     this.props.navigation.navigate('Canteen', {userId: responseData.userId});
    //                 // }else{
    //                 //    alert( '密码错误');
    //                 // }
    //             }).catch((error)=>{//有关cookie再说
    //              alert(error);
    //              //alert('错误了');
    //         })
    //
    //     }
    // }
    render() {

        const {navigate} = this.props.navigation;
        return (
           <View style={{position:'relative',backgroundColor:"white",height:screenHeight, alignItems: 'center'}}>
               <View style={LoginStyle.loginFrame}>
                   <TextInput style={LoginStyle.textInput} placeholderTextColor="#a6a6a6"
                              placeholder="请输入用户名" onChangeText={(username) => this.setState({username})}
                   />
                   <TextInput style={LoginStyle.textInput}  placeholderTextColor="#a6a6a6"
                              clearButtonMode="while-editing" secureTextEntry placeholder="请输入密码"
                              onChangeText={(password) => this.setState({password})}
                   />
                   <Text style={LoginStyle.forget}>忘记密码？</Text>
                   <TouchableOpacity style={LoginStyle.button} onPress={this.login}>
                        <Text style={{position:'relative',alignSelf:'center',color:"white" ,fontSize:16}}>登录</Text>
                   </TouchableOpacity>
               </View>
               <View style={{position:"absolute",bottom:200}}>
                   <Text  style={{color:"black",fontSize:13}}>还没有账号？</Text>
                   <TouchableOpacity onPress={()=> {navigate('Register')}}>
                       <Text style={{color:"#4DB6AC",fontSize:13}}>注册膳行账号</Text>
                   </TouchableOpacity>
               </View>
            </View>

        );
    }

}
const LoginStyle = StyleSheet.create({
    loginFrame:{
        position:'relative',
        backgroundColor:"white",
        top:70,
        height:300,
        width:screenWidth*0.8,
        borderRadius:10,
    },
    textInput:{
        justifyContent:"center",
        top:10,
        height:50 ,
        fontSize:17,


    },
    forget:{
        color: "#a5dad5",
        fontSize:13,
        right:5,
        top:10,
        alignSelf:"flex-end"
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
const App=StackNavigator({
    Login :{ screen: Login,
        navigationOptions:{
            title:'登录',
            headerTitleStyle:{left:0},
        }
    },
    Register:{screen:Register,
        navigationOptions:{
            title:'注册'
        }
    },

    Update:{screen:Update,
        navigationOptions:{
            title:'完善资料'
        }
    },
    Canteen:{
        screen:Canteen,
        navigationOptions:{
            title:'主页',
            header:null,
            visible:false
        }
    },
    CanteenDetail :{
        screen:CanteenDetail,
        navigationOptions:{
            // title: (navigation, childRouter) => {  // 动态标题
            //     if (navigation.state.params.isSelected) {
            //         return `${navigation.state.params.name}选中`;
            //     } else {
            //         return `${navigation.state.params.name}没选中`;
            //     }
            // },
        }
    },
    DishDetail:{
      screen:DishDetail,
      navigationOptions:{
          title:'菜品详情'
      }
    },
    Me:{
        screen:Me,
        navigationOptions:{
            title:'个人主页'
        }
    },
    MeChildren:{
        screen:MeChildren,
        navigationOptions:{
            title:'个人信息'
        }
    },
    MeGoal:{
        screen:MeGoal,
        navigationOptions:{
            title:'我的目标'
        }
    },
    MeLove:{
        screen:MeLove,
        navigationOptions:{
            title:'我的收藏'
        }
    },
    // MeReview:{
    //     screen:MeReview,
    //     navigationOptions:{
    //         title:'我的评论'
    //     }
    // },
    Meset:{
        screen:Meset,
        navigationOptions:{
            title:'设置'
        }
    },
},{
    initialRouteName: 'Login',
    navigationOptions:{
        headerTintColor:'white',
        headerStyle:{

            backgroundColor:'#4DB6AC',
        },
        headerTitleStyle:{
           // width:100,
            //backgroundColor:'blue',
            //textAlign:'center',
            //position:'absolute',
           // left:0
             left:-40,
        },


    }

});

export default App;
AppRegistry.registerComponent('huProject',()=>App);