
import ImagePicker from 'react-native-image-picker';
import React, {Component} from 'react';


import {
    Picker,
    PixelRatio,
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
import MeChildren from "../PersonInformation/MeChildren";

let screenWidth = screen.width;
let screenHeight = screen.height;



export default class Register extends Component {


    constructor(props) {
        super(props);
        this.finish=this.finish.bind(this);
        this.state = {
            avatarSource: null,
            sex:"男",
            username:"开森",
            target:"减脂",
            tall:"",
            weight:"",
            age:""
        };
        this.reg=this.reg.bind(this);
    }

    selectPhotoTapped() {
        const options = {

            title:"选取图片",
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle:'从相册中选取',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    reg(){
        alert(a);
    }
    finish(){
        let userId=this.props.navigation.state.params.userId;
        fetch(global.constants.website+"/user/login:"+global.constants.port, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':global.constants.contenType,
            },
            body: JSON.stringify({
                userId:userId,
                sex:this.state.sex,
                target:this.state.target,
                tall:this.state.tall,
                weight:this.state.weight,
                age:this.state.age,
                avatarSource: this.state.avatarSource,
            })
        }).then((response)=>{console.log(response);response.json()})
            .then((responseData)=>{
                let right=responseData.right;
                global.constants.userId=responseData.userId;
                if(right) {
                    this.props.navigation.navigate('Canteen', {userId: responseData.userId});
                }else{
                    alert( '密码错误');
                }
            }).catch((error)=>{//有关cookie再说
            alert('错误了');
        })
    }
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={updateStyle.container}>
                <View style={updateStyle.Frame}>
                    <View style={[updateStyle.Item,{height:70}]}>
                        <Text style={updateStyle.Text} onPress={this.selectPhotoTapped.bind(this)}>上传头像</Text>
                        <TouchableOpacity style={{ position:'absolute' , alignSelf:'flex-end', right:10,width:50}} onPress={this.selectPhotoTapped.bind(this)}>
                            <View style={[styles.avatar, styles.avatarContainer]}>
                                { this.state.avatarSource === null ? <Image source={require('../../img/account.png')} style={{width:40,height:40}}/> :
                                    <Image style={styles.avatar} source={this.state.avatarSource} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={updateStyle.Item}>
                        <Text style={updateStyle.Text}>用户名</Text>
                        <Text style={[updateStyle.Text,{alignSelf:'flex-end'}]}>{this.state.username}</Text>
                    </View>
                    <ChooseItem chooseItems={[{key:1,value:'男'},{key:2, value:'女'}]} text="性别" callbackParent={(data)=>{this.setState({sex:data})}}></ChooseItem>
                    <View style={updateStyle.Item}>
                        <Text style={updateStyle.Text}>年龄</Text>
                        <TextInput style={[updateStyle.Text,{right:25,width:50}]}
                                   onChangeText={(age) => this.setState({age})}/>
                        <Text style={[updateStyle.Text,{alignSelf:'flex-end',fontSize:14}]}>岁</Text>
                    </View>
                    <View style={updateStyle.Item}>
                        <Text style={updateStyle.Text}>身高</Text>
                        <TextInput style={[updateStyle.Text,{right:25,width:50}]}
                                   onChangeText={(tall) => this.setState({tall})}/>
                        <Text style={[updateStyle.Text,{alignSelf:'flex-end',fontSize:14}]}>cm</Text>
                    </View>
                    <View style={updateStyle.Item}>
                        <Text style={updateStyle.Text}>体重</Text>
                        <TextInput style={[updateStyle.Text,{right:25,width:50}]}
                                   onChangeText={(weight) => this.setState({weight})}/>
                        <Text style={[updateStyle.Text,{alignSelf:'flex-end',fontSize:14}]}>kg</Text>
                    </View>
                    <ChooseItem chooseItems={[{key:1,value:'增肌'},{key:2, value:'减脂'},{key:3,value:'保持'}]} text="目标" callbackParent={(data)=>{this.setState({target:data})}}></ChooseItem>

                    <TouchableOpacity style={updateStyle.button} onPress={()=>navigate('Canteen')}>
                        <Text style={{position:'relative',alignSelf:'center',color:"white" ,fontSize:16}}>完成</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

};

class ChooseItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:''
        };
    }
    render(){
        let chooseItems=this.props.chooseItems;
        return(
        <View style={[updateStyle.Item,{height:50}]}>
            <Text style={updateStyle.Text}>{this.props.text}</Text>
            <Picker style={{position:'absolute',width:90,alignSelf:'flex-end'}}prompt={"请选择"+this.props.text}
                    selectedValue={this.state.data}
                    onValueChange={(itemValue) =>{
                        this.setState({data: itemValue});
                        this.props.callbackParent(itemValue);
                    }}
                    mode="dialog">
                {
                    chooseItems.map( (item)=> <Picker.Item label={item.value} key={item.key} value={item.value}/>)
                }
            </Picker>
        </View>
        );
    }
}
const updateStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Frame:{
        flex:1,
        position:'relative',
        backgroundColor:"white",
        top:0,
        width:screenWidth,
        alignSelf:"center"
    },
    Item:{
        height:50,
        borderBottomWidth:0.5,
        alignContent:'center',
        justifyContent:'center',
        borderBottomColor: "#d9d9d9",
    },
    Text:{
        position:'absolute',
        fontSize:20,
        paddingLeft:5,
        //alignSelf:'flex-start',
        justifyContent:'center',
        paddingRight:10
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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },

    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar: {
        position:'relative',

        borderRadius: 75,
        width: 50,
        height: 50,
        overflow:'hidden'
    }

});


