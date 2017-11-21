/**
 * 软件主页
 */
import React, {Component} from 'react';
import {
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import screen from '../../common/screen'
import Swiper from 'react-native-swiper';
export default class Canteen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            titleName:'银桦',
            goal:'减脂套餐',
            data: [
                {name: '香辣虾', place: '学子', window: '7', image: 'https://ali.xinshipu.cn/20121017/original/1350477964699.jpg', taste: '辣'},
                {name: '茄子豆角', place: '家园', window: '6', image: 'http://s1.cdn.xiachufang.com/e5c4d336873611e6a9a10242ac110002_690w_460h.jpg@2o_50sh_1pr_1l_660w_90q_1wh', taste: '甜'},
                {name: '清蒸鲈鱼', place: '银桦', window: '1', image: 'http://site.meishij.net/r/237/178/1232237/s1232237_78397.jpg', taste: '甜'},
                {name: '蚂蚁上树', place: '芙蓉', window: '4', image: 'http://site.meishij.net/r/208/36/1259208/s1259208_142191947426931.jpg', taste: '辣'},
                {name: '糖醋排骨', place: '紫荆', window: '1', image: 'http://site.meishij.net/r/04/143/2598254/s2598254_52124.jpg', taste: '甜'},
                {name: '虎皮青椒', place: '桃园', window: '3', image: 'http://i8.meishichina.com/attachment/r/2012/05/23/20120523152541716054498.jpg@!p800', taste: '辣'}
            ],
        }
    }
    // componentDidMount(){
    //     let userId=this.props.navigation.state.params.userId;
    //     fetch(global.constants.website+"/user/canteen:"+global.constants.port, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type':global.constants.contenType,
    //         },
    //         body: JSON.stringify({
    //             userId: userId,
    //         })
    //     }).then((reponse)=>response.json())
    //         .then((responseData)=>{
    //             let right=responseData.right;
    //             if(right) {
    //                 this.state=responseData;
    //             }else{
    //                 this.props.navigation.navigate('Login');
    //             }
    //         }).catch((error)=>{//有关cookie再说
    //         alert('错误了');
    //     })
    // }
    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={{width: screen.width, height: screen.height}}
                    contentContainerStyle={{alignItems: 'center', backgroundColor: '#f5f5f5', paddingBottom: 10}}
                    removeClippedSubview={false}
                >
                    <HeaderView navigate={navigate}/>

                    <CanteenHandleView navigate={navigate}/>
                    <View style={styles.TextStyleOne}>
                    <Text style={styles.TextStyle}>
                        特色菜品介绍
                    </Text>
                    </View>
                    <Swiper style={styles.wrapper}
                            loop={true}
                            paginationStyle={{bottom:10}}
                            dot={<View style={{
                                width:8,
                                height:8,
                                backgroundColor:'white',
                                borderRadius:4,
                                marginLeft:3,
                                marginRight:3}}/>}
                            activeDot={<View style={{
                                width:8,
                                height:8,
                                backgroundColor:'#06C1AE',
                                borderRadius:4,
                                marginLeft:3,
                                marginRight:3}}/>}
                    >
                        {this.FoodIntro()}
                    </Swiper>
                </ScrollView>
            </View>
        )
    }
    // 香辣虾、茄子豆角、芙蓉辣椒炒肉、紫荆糖醋脆皮豆腐、银桦菠萝鸭、桃园糖醋里脊
    FoodIntro() {
                let imageViews=[];
                for(let i=0;i<this.state.data.length;i++){
                imageViews.push(
                    <View key={i}>
                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DishDetail',{Dishname:this.state.data[1].name})}>
                            <View>
                                <Image
                                   // key={i}
                                    style={styles.image}
                                    source={{uri:this.state.data[i].image}}
                                />
                            </View>
                            <View>
                                <Text style={{height:30,backgroundColor:'#f5f5f5'}} >菜名：{this.state.data[i].name}           口味：{this.state.data[i].taste} </Text>
                                <Text style={{height:30,backgroundColor:'#f5f5f5'}} >食堂：{this.state.data[i].place}             窗口：{this.state.data[i].window}号</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
                }
                return imageViews;
    }
    // HeaderView(){
    //     return (
    //         <View style={styles.container}>
    //
    //             <TouchableOpacity ><Image source={require('../../img/bussiness-man.png')} style={styles.logo}/></TouchableOpacity>
    //
    //             <View style={styles.searchBox}>
    //
    //                 <Image source={require('../../img/search.png')} style={styles.searchIcon}/>
    //
    //                 <TextInput style={styles.inputText}
    //                            keyboardType='web-search'
    //                            placeholder='请输入食物名称'/>
    //
    //                 <Image source={require('../../img/voice.png')} style={styles.voiceIcon}/>
    //             </View>
    //             <Image source={require('../../img/qr.png')} style={styles.scanIcon}/>
    //         </View>
    //     )
    // }
}
class HeaderView extends Component{
    render(){
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=> {this.props.navigate('Me')}}>
                    <View>
                        <Image source={require('../../img/me.jpg')} style={styles.logo}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.searchBox}>

                    <Image source={require('../../img/search.png')} style={styles.searchIcon}/>

                    <TextInput style={styles.inputText}
                               keyboardType='web-search'
                               placeholder='请输入食物名称'/>

                    <Image source={require('../../img/voice.png')} style={styles.voiceIcon}/>
                </View>
                <Image source={require('../../img/qr.png')} style={styles.scanIcon}/>
            </View>
        )
    }
}
// const CanteenHandleView = ({HandleAction}) => {
//
//     return (
//         <View>
//             <View style={styles.cell}>
//             <HandleItem title="银桦"
//                         imageName={require('../../img/yinhua.jpg')}
//             />
//             <View style={styles.line}/>
//             <HandleItem title="紫荆"
//                         imageName={require('../../img/zijing.jpg')}
//             />
//             <View style={styles.line}/>
//             <HandleItem title="芙蓉"
//                         imageName={require('../../img/furong.jpg')}
//             />
//             </View>
//             <View style={styles.cell}>
//                 <HandleItem title="桃园"
//                             imageName={require('../../img/taoyuan.jpg')}
//                 />
//                 <View style={styles.line}/>
//                 <HandleItem title="学子"
//                             imageName={require('../../img/xuezi.png')}
//                 />
//                 <View style={styles.line}/>
//                 <HandleItem title="家园"
//                             imageName={require('../../img/jiayuan.jpeg')}
//                 />
//             </View>
//         </View>
//     )
// };
class CanteenHandleView extends Component{
    render(){
        return (
            <View>
                <View style={styles.cell}>
                    <HandleItem title="银桦" navigate={this.props.navigate}
                                imageName={require('../../img/yinhua.jpg')}
                    />
                    <View style={styles.line}/>
                    <HandleItem title="紫荆" navigate={this.props.navigate}
                                imageName={require('../../img/zijing.jpg')}
                    />
                    <View style={styles.line}/>
                    <HandleItem title="芙蓉" navigate={this.props.navigate}
                                imageName={require('../../img/furong.jpg')}
                    />
                </View>
                <View style={styles.cell}>
                    <HandleItem title="桃园" navigate={this.props.navigate}
                                imageName={require('../../img/taoyuan.jpg')}
                    />
                    <View style={styles.line}/>
                    <HandleItem title="学子" navigate={this.props.navigate}
                                imageName={require('../../img/xuezi.png')}
                    />
                    <View style={styles.line}/>
                    <HandleItem title="家园" navigate={this.props.navigate}
                                imageName={require('../../img/jiayuan.jpeg')}
                    />
                </View>
            </View>
        )
    }
}
class HandleItem extends Component{
    render(){
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.handelItem}
                onPress={()=>this.props.navigate('CanteenDetail',{canteenName:this.props.title})}
            >
                <View>
                    <Image style={{width: 70, height: 28}} source={this.props.imageName}/>
                    <Text style={{fontSize: 13, color: 'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
// const HandleItem = ({
//                         imageName,
//                         title
//                     }) => {
//     return (
//         <TouchableOpacity
//             activeOpacity={0.75}
//             style={styles.handelItem}
//             // onPress={()=>navigate('CanteenDetail',{canteenName:this.props.title})}
//         >
//             <Image style={{width: 70, height: 28}} source={imageName}/>
//             <Text style={{fontSize: 13, color: 'gray'}}>{title}</Text>
//         </TouchableOpacity>
//     )
// };
//样式
const styles = StyleSheet.create({
    wrapper: {
        width: screen.width,
        backgroundColor: 'transparent',
        marginTop: 5,
        height: 300
    },
    imgView: {
        width: screen.width,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 200
    },
    image: {
        width: screen.width,
        height: 230,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    TextStyleOne:{
        height: 50,
        width: screen.width-16*2,
        marginTop: 5,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#06C1AE',
    },
    TextStyle:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#06C1AE',
        color: 'white',
        textAlign:'center'
    },
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        height: 60,
        backgroundColor: '#06C1AE',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {//图片logo
        height: 36,
        width: 50,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox:{//搜索框
        height:42,
        flexDirection: 'row',   // 水平排布
        flex:1,
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
    },
    searchIcon: {//搜索图标
        height: 20,
        width: 20,
        marginLeft: 5,
        resizeMode: 'stretch'
    },
    inputText:{
        flex:1,
        backgroundColor:'transparent',
        fontSize:15,
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    scanIcon: {//搜索图标
        height: 36,
        width: 36,
        resizeMode: 'stretch'
    },
    cell: {
        height: 60,
        width: screen.width,
        backgroundColor: 'white',
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: {width: 1, height: -1},
        shadowRadius: 2,
    },
    handelItem: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    line: {
        height: 50,
        width: 0.5,
        backgroundColor: '#06C1AE'
    }
});