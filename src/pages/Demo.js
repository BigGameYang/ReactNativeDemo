/**
 * Demo 主页
 */


import React, {Component} from 'react'
import {Button} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import ResourceUtil from '../utils/ResourceUtil'

export default class Demo extends Component {

    static navigationOptions = {
        title : 'Demo主页',
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Button
                    onPress={() => this.props.navigation.navigate('ContributionTab')}
                    title="贡献榜主页demo"
                    color={ResourceUtil.colors.color1}
                    />
            </SafeAreaView>
        );
    }

}
