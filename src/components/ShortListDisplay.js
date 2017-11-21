/*
*由CanteenDetails调用的组件
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
    Dimensions
} from 'react-native';
import SpacingView from '../components/SpacingView'
import screen from '../common/screen';
export default class ListDisplay extends Component{
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //然后通过cloneWithRows方法为其传递一个数组
            dataSource: ds.cloneWithRows(this.props.data),
        };
    }
    // renderRow(row, t, i) {
    //     return (
    //         <View>
    //             <View key={i} style={styles.flex1}>
    //                 <View style={[styles.flex, {flex: 7}]}>
    //                     <View style={{padding: 10}}><Image style={{height: 80, width: 80}} source={{uri: row.image}}/></View>
    //                     <View>
    //                         <Text style={{paddingTop: 10}}>{row.name}</Text>
    //                         <Text style={{paddingTop: 8, fontSize: 12}}>{row.place}</Text>
    //                         <View style={[styles.flex, {paddingTop: 5}]}>
    //                             <Text style={{fontSize: 13}}>{row.window}号窗口</Text>
    //                         </View>
    //                     </View>
    //                 </View>
    //                 <View style={{flex: 3, alignItems: 'flex-end'}}>
    //                     <Text style={{fontSize: 12, paddingTop: 54, paddingRight: 5}}>口味：{row.taste}</Text>
    //                 </View>
    //             </View>
    //             <SpacingView />
    //         </View>
    //     )
    // }
    render() {
        return (
            <ListView
                style={styles.row}
                dataSource={this.state.dataSource}
                renderRow={(item)=><RenderRow  navigate={this.props.navigate} data={item}/>}
            />
        )
    }
}

class RenderRow extends Component{
    render(){
        let row=this.props.data;
        return (
            <View>
                <View key={row.name} style={styles.flex1}>
                    <TouchableOpacity onPress={()=>{this.props.navigate('DishDetail',{name:row.name})}}>
                        <View style={[styles.flex, {flex: 7}]}>
                            <View style={{padding: 10}}><Image style={{height: 80, width: 80}} source={{uri: row.image}}/></View>
                            <View>
                                <Text style={{paddingTop: 10}}>{row.name}</Text>
                                <Text style={{paddingTop: 8, fontSize: 12}}>{row.place}</Text>
                                <View style={[styles.flex, {paddingTop: 5}]}>
                                    <Text style={{fontSize: 13}}>{row.window}号窗口</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 3, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 12, paddingTop: 54, paddingRight: 5}}>口味：{row.taste}</Text>
                    </View>
                </View>
                <SpacingView />
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    flex1: {
        width:screen.width,
        flexDirection: 'row',
        marginTop: 5,
    },
    flex: {
        flexDirection: 'row',
    },
    row: {marginBottom: 6, backgroundColor: '#fff'},
    block: {flex: 1, padding: 5},
    item: {flex: 1, alignItems: 'center', padding: 5},
});