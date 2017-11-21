/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/**
 *  shanxing入口文件
 */

import React, { PureComponent } from 'react';

import { AppRegistry } from 'react-native';
import './src/common/global';
//import MeChildren from './src/pages/PersonInformation/MeChildren';
import Login from  './src/pages/Login/login';
//import DishDetail from './src/pages/MainContent/dishDetail';


export default class ShanXing extends PureComponent {
    render() {
        return (
            <Login />
        );
    }
}

AppRegistry.registerComponent('ShanXing', () => ShanXing);