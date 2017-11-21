/*
*由Me页面扩展的我的收藏子页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    RefreshControl,
    Image,
    ScrollView,
    TouchableOpacity,
    View,
    ListView
} from 'react-native';
import screen from '../../common/screen'
let screenWidth = screen.width;
let screenHeight = screen.height;
import LoginNavi from '../../components/loginNavigator'
import ListDisplay from '../../components/ListDisplay'
export default class MeChildren extends Component {

    state={
        isRefreshing: true
    };

    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false,
            title:'我的收藏',
            data: [
                {name: '炖牛肉', place: '银桦', window: '8', image: 'http://site.meishij.net/r/23/56/3764023/s3764023_142603959065933.jpg',taste: '辣',time:'2017-11-20'},
                {name: '香辣虾', place: '学子', window: '7', image: 'https://ali.xinshipu.cn/20121017/original/1350477964699.jpg', taste: '辣',time:'2017-11-18'},
                {name: '茄子豆角', place: '家园', window: '4', image: 'http://s1.cdn.xiachufang.com/e5c4d336873611e6a9a10242ac110002_690w_460h.jpg@2o_50sh_1pr_1l_660w_90q_1wh', taste: '甜',time:'2017-11-10'},
                {name: '青椒素炒杏鲍菇', place: '银桦', window: '7', image: 'http://s2.cdn.xiachufang.com/e63580aa87bc11e6b87c0242ac110003_2592w_1936h.jpg?imageView2/2/w/660/interlace/1/q/90', taste: '咸',time:'2017-11-5'},
            ],
        }
    }
    componentDidMount(){
        this.setState({
            message:this.props.message,
        });
    }
    onHeaderRefresh() {
        this.setState({isRefreshing: true});

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    <View style={styles.list}>
                        <ListDisplay data={this.state.data} navigate={this.props.navigation.navigate}/>
                    </View>
                </ScrollView>
            </View>
        );
    }


}

const  styles = StyleSheet.create({
    list:{
        width:screen.width,
        backgroundColor:'transparent',
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    }
});