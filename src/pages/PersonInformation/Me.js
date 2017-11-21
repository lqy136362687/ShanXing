/*
*个人中心主页面
*/
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    RefreshControl,
    Image,
    ScrollView,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import { Heading1, Heading2, Paragraph } from '../../common/Text'
import MineItemCell from '../../components/MineItemCell';
import SpacingView from '../../components/SpacingView';
import screen from '../../common/screen';

let screenWidth = screen.width;
let screenHeight = screen.height;


export default class Me extends Component {

    state={
        isRefreshing: true
    };

    constructor(props) {
        super(props);

        this.state = {
            name:"开森",
            image:require('../../img/me.jpg'),
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({isRefreshing: true});

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }

    renderCells() {
        let cells = [];
        let dataList = this.getDataList();
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i];
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j];
                let cell = <MineItemCell image={data.image} title={data.title} 
                                         key={data.title} page={data.page} navigate={this.props.navigation.navigate}/>;
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

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <TouchableOpacity >
                    <Image style={styles.avatar} source={this.state.image} />
                    </TouchableOpacity>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Heading1 style={{color: 'white'}}>{this.state.name}</Heading1>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MeChildren')} >
                        <Paragraph style={{color: 'white', marginTop: 4}}>个人中心 > </Paragraph>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    getDataList() {
        return (
            [
              [
                    {title: '我的目标', image: require('../../img/aim.png'),page:'MeGoal'}
              ],
              [
                    {title: '我的收藏', image: require('../../img/favorite1.png'),page:'MeLove'},
                    {title: '我的评论', image: require('../../img/addition.png')},
                    {title: '历史记录', image: require('../../img/history.png')}
              ],
              [
                    {title: '设置', image: require('../../img/set.png'),page:'Meset'}
              ]    
            ]
        )
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
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    header: {
        backgroundColor: '#06C1AE',
        paddingBottom: 20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 7,
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

AppRegistry.registerComponent('huProject',()=>Me);