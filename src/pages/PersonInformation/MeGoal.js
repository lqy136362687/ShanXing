/*
*由Me页面扩展的我的目标子页面
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
            title:'我的目标',
            titledetails:{
                height:'165cm',
                weight:'56kg',
                goal:'减脂',
                goalweight:'50kg',
                goaltime:'2018-2-1'
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
                            {title: '身高', subtitle:(this.state.titledetails.height)},
                            {title: '初始体重', subtitle:(this.state.titledetails.weight)}
                        ],
                        [
                            {title: '目标', subtitle:(this.state.titledetails.goal)},
                            {title: '目标体重', subtitle:(this.state.titledetails.goalweight)}
                        ],
                        [
                            {title: '目标完成时间', subtitle:(this.state.titledetails.goaltime)}
                        ]
                    ])
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