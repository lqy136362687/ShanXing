/*
*由Me页面扩展的设置子页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    RefreshControl,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Alert,
    View,
    Dimensions
} from 'react-native';
import { Heading1, Heading2, Paragraph } from '../../common/Text'
import MineItemCell from '../../components/MineItemCell2';
import SpacingView from '../../components/SpacingView'
import screen from '../../common/screen'
let screenWidth = screen.width;
let screenHeight = screen.height;
import LoginNavi from '../../components/loginNavigator'

export default class MeChildren extends Component {

    state={
        isRefreshing: true
    };

    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false,
            title:'设置',
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
    getDataList() {
                return (
                    [
                        [
                            {title: '修改用户名/昵称'},
                            {title: '设置密码'}
                        ],
                        [
                            {title: '修改目标'}
                        ],
                        [
                            {title: '关于膳行'}
                        ]
                    ]
                );
    }
    renderCells() {
        let cells = [];
        let dataList = this.getDataList();
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i];
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j];
                let cell = <MineItemCell image={data.image} title={data.title} subtitle={data.subtitle}
                                         key={data.title}/>;
                cells.push(cell)
            }
            cells.push(<SpacingView key={i}/>)
        }

        return (
            <View style={{flex: 1}}>
                {cells}
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    position: 'absolute',
                    width: screenWidth,
                    height: screenHeight / 2,
                    // backgroundColor: '#06C1AE'
                }}>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    <SpacingView />
                    {this.renderCells()}
                    <CustomButton text='退出'
                                  onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                                      {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消~',ToastAndroid.SHORT)},
                                      {text:'确定',onPress:()=>this.props.navigation.navigate('Login')}
                                  ])}
                    />
                </ScrollView>
            </View>
        );
    }


}
class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    button:{
        width:screen.width,
        height:44,
    },
    buttonText:{
        width:screen.width,
        backgroundColor:'#f3f3f3',
        fontSize: 14,
        height: 44,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    header: {
        backgroundColor: '#06C1AE',
        paddingBottom: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});