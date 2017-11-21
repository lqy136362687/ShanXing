
import React, {Component} from 'react';
import {
    Text,
    AppRegistry,
    StyleSheet,
    FlatList,
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


export default class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishDetail:{
                dishName: "香辣虾",
                goodState: false,//false未点赞，true已点赞
                goodCount: 0,
                PC: 13.54,
                FC:4.62,//脂肪
                window:7,
                taste:"辣",
                Cal:116,
                canteen: "学子餐厅",
                imageAddress:'https://ali.xinshipu.cn/20121017/original/1350477964699.jpg'
            },
            review: [{key:1,user: "嗑盐狗", reviewWord: "这个东西味道不错",userImage:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1511234751&di=f30d51a00127f6b5e43138a84acb94ad&src=http://pic18.nipic.com/20111223/3490083_235743735130_2.jpg'},
                {key:2,user: "吃遍天下货", reviewWord: "学子食堂最好吃的菜，推荐",userImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511253059001&di=6260c5ee2e6dcd06bfa943ebcfef7c3b&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F13%2F66%2F01%2F44b2OOOPICb5.jpg'}],
        }
    }
    render(){
        let imageAddress=this.state.dishDetail.imageAddress;
        let likeAddress=this.state.dishDetail.goodState ? require( '../../img/like.png'): require('../../img/notlike.png');
        let dishDetails=this.state.dishDetail;
        return(
            <ScrollView style={{flex:1}}>
                <View  style={Style.dishHead}>
                    <Image source={{uri:imageAddress}} style={{width:screenWidth,height:220}}></Image>

                </View>
                <View style={Style.container}>
                    <View style={[{height:60,borderBottomWidth:0.5,borderBottomColor:"#a6a6a6"},Style.flexContainer]}>
                        <Text style={Style.name}>{this.state.dishDetail.dishName}</Text>
                        <View style={{position:'relative',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',flex:1,height:30}}>
                            <TouchableOpacity onPress={()=>{dishDetails.goodState=!dishDetails.goodState;this.setState({dishDetail:dishDetails})}}>
                                <Image source={likeAddress} style={{width:20,height:20,marginTop:10,marginLeft:5}} />
                            </TouchableOpacity>
                            <Text style={{fontSize:15,height:20,marginTop:10}}>{this.state.dishDetail.goodCount}</Text>
                        </View>
                        <TouchableOpacity style={Style.collectButton}>
                            <Text style={{position:'absolute' ,color:'white',fontSize:20,left:15,width:60}}>收藏</Text>
                            <Image source={require('../../img/favorite.png')} style={{height:20,width:20,alignSelf:'flex-end',marginRight:10}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.detail}>
                        <InfoItem title="餐厅" info={this.state.dishDetail.canteen}/>
                        <InfoItem title="窗口" info={this.state.dishDetail.window}/>
                        <InfoItem title="口味" info={this.state.dishDetail.taste}/>
                        <InfoItem title="卡路里"  info={dishDetails.Cal+"大卡/100g"}/>
                        <InfoItem title='脂肪含量' info={dishDetails.FC+"大卡/100g"}/>
                        <InfoItem title='蛋白质含量' info={dishDetails.PC+"大卡/100g"}/>
                    </View>
                </View>
                <View>
                    <View style={[Style.flexContainer,{height:20,backgroundColor:"#d6d6d6"}]}>
                        <Text style={{color:"#a6a6a6"}}>—— 评价 ——</Text>
                    </View>
                    <FlatList style={Style.container} data={this.state.review} renderItem={({item}) => <Review key={item.key} review={item}/>}
                    />

                </View>
            </ScrollView>
        );
    }
};

class InfoItem extends Component{
    render(){
        return(
            <View style={[{height:35 },Style.flexContainer]}>
                <Text style={{flex:1 ,fontSize:18,marginRight:10,}}>{this.props.title}</Text>
                <Text style={{flex:2.2 , fontSize:18,marginRight:10}}>{this.props.info}</Text>
            </View>
        )
    }

}
class Review extends Component{
    render(){
        let review=this.props.review;
        return(
            <View style={[Style.flexContainer ,{borderBottomWidth:0.5,borderBottomColor:"#a6a6a6"}]}>
                <Image source={{uri:review.userImage}} style={{height:40,width:40,margin:10,alignSelf:'flex-start'}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                    <Text style={{fontSize:18,color:'#4DB6AC'}}>{review.user}</Text>
                    <Text style={{fontSize:18}}>{review.reviewWord}</Text>
                </View>
            </View>
        )
    }
}
const Style = StyleSheet.create({
    container:{
       // flex:1,
        width:screenWidth*0.94,
        alignSelf:'center',
    },
    dishHead:{
        height:220,
    },
    flexContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    name:{
       // position:'absolute',
        fontSize:25,
        fontWeight:"600",
        fontFamily:"Microsoft Yahei"
    },
    collectButton:{
        height:40,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'#4DB6AC',
        //alignSelf:'flex-end'
    },
    detail:{
        width:screenWidth*0.9,
        alignSelf:'center',
        marginTop:20,
        marginBottom:20,
        //height:40,
    },
    itemInfo:{
        flexDirection:'row',

    }
});

AppRegistry.registerComponent('huProject',()=>DishDetail);