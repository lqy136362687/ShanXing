/*
*由Me页面扩展的个人信息子页面
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
    Dimensions
} from 'react-native';
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
        this.getDataList=this.getDataList.bind(this);
        this.state = {
            isRefreshing: false,
            title:'个人信息',
            titledetails:{
                name:'开森',
                charactor:'膳行真棒',
                sex:'女',
                birth:'22',
                image:require('../../img/me.jpg')
            },
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
                            {title: '头像', image: this.state.titledetails.image},
                            {title: '昵称', subtitle:(this.state.titledetails.name)},
                            {title: '个性签名', subtitle: (this.state.titledetails.charactor)},
                            {title: '性别', subtitle: (this.state.titledetails.sex)},
                            {title: '年龄', subtitle: (this.state.titledetails.birth)}
                        ]
                    ]);
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
                      //  backgroundColor: '#06C1AE'
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
                    </ScrollView>
                </View>
            );
        }


    }

    const  styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f3f3f3',
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