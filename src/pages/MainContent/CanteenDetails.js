/*
*由Canteen跳转过来的子页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    RefreshControl,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { Heading1, Heading2, Paragraph } from '../../common/Text'
import MineItemCell from '../../components/MineItemCell2';
import SpacingView from '../../components/SpacingView'
import screen from '../../common/screen'
import LoginNavi from '../../components/loginNavigator'
import ShortListDisplay from '../../components/ShortListDisplay'
import TextImageWidget from "../../components/TextImage";
let screenWidth = screen.width;
let screenHeight = screen.height;


export default class CanteenDetails extends Component {

    componentDidMount(){
        // 通过在componentDidMount里面设置setParams将title的值动态修改'
        this.setState({titleName:this.props.navigation.state.params.canteenName});
    }

    state = {
        isRefreshing: true
    };

    constructor(props) {
        super(props);
        this.state = {
            mealState: true, //false 为未点，true为点
            isRefreshing: false,
            titleName: '银桦',
            goal: '减脂套餐',
            data_balance: [
                {
                    name: '炖牛肉',
                    place: '银桦',
                    window: '8',
                    image: 'http://site.meishij.net/r/23/56/3764023/s3764023_142603959065933.jpg',
                    taste: '辣'
                },
                {
                    name: '香脆炒黄瓜',
                    place: '银桦',
                    window: '2',
                    image: 'https://s1.cdn.xiangha.com/caipu/201501/2300/230038462808.jpg/NjAwX2MxXzQwMA',
                    taste: '咸'
                },
                {
                    name: '米饭',
                    place: '银桦',
                    window: '2',
                    image: 'http://images.meishij.net/p/20111205/fd355e4ce8d6262febd7e8085fde35b9_180x180.jpg',
                    taste: '甜'
                },

            ],
            data_charactor: [
                {
                    name: '清蒸鲈鱼',
                    place: '银桦',
                    window: '1',
                    image: 'http://site.meishij.net/r/237/178/1232237/s1232237_78397.jpg',
                    taste: '甜'
                },
                {
                    name: '青椒素炒杏鲍菇',
                    place: '银桦',
                    window: '7',
                    image: 'http://s2.cdn.xiachufang.com/e63580aa87bc11e6b87c0242ac110003_2592w_1936h.jpg?imageView2/2/w/660/interlace/1/q/90',
                    taste: '咸'
                },
                {
                    name: '米饭',
                    place: '银桦',
                    window: '2',
                    image: 'http://images.meishij.net/p/20111205/fd355e4ce8d6262febd7e8085fde35b9_180x180.jpg',
                    taste: '甜'
                },
            ],
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title:navigation.state.params.canteenName
    });
    // componentDidMount() {
    //     this.setState({
    //         message: this.props.message,
    //     });
    // }

    onHeaderRefresh() {
        this.setState({isRefreshing: true});

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }

    render() {
        let canteenName=this.props.navigation.state.params.canteenName;

        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={{width: screen.width, height: screen.height}}
                    contentContainerStyle={{alignItems: 'center', backgroundColor: '#f5f5f5', paddingBottom: 10}}
                    removeClippedSubview={false}
                >
                    <View>
                        <Image source={require('../../img/beijing1.jpg')} style={styles.images}/>
                    </View>
                    {this.HandleItem()}
                </ScrollView>
            </View>
        )
    }

    HandleItem() {
        return (
            <View style={styles.handleItem}>
                <View>
                    <Text style={styles.textItem}>{this.state.goal}</Text>
                    <View style={styles.list}>
                        <ShortListDisplay data={this.state.data_balance} navigate={this.props.navigation.navigate}/>
                    </View>
                    <Text style={styles.textItem}>特色套餐 </Text>
                    <View style={styles.list}>
                        <ShortListDisplay data={this.state.data_charactor} navigate={this.props.navigation.navigate}/>
                    </View>
                </View>
            </View>
        )
    }
}
const  styles = StyleSheet.create({
    btn: {
        flex:1,
        height:50,
        width: screen.width/2-16,
        backgroundColor:'transparent',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    images: {
        paddingBottom: 0,
        width:screen.width,
        height:150
    },
    handleItem: {
        //flexDirection: 'row',
        width:screen.width,
        marginTop: 5,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    list:{
        width:screen.width,
        backgroundColor:'white',
        marginTop: 5,
    },
    textItem: {
        width: screen.width,
        fontSize: 20,
        height:50,
        color: 'white',
        textAlign:"center",
        justifyContent: 'center',
        backgroundColor: '#06C1AE'
    },
    line: {
        height: 50,
        width: 0.5,
        backgroundColor: '#06C1AE'
    }
});