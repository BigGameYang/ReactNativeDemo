import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, RefreshControl } from 'react-native'
import DisplayUtil from '../utils/DisplayUtil'
import ResourceUtil from '../utils/ResourceUtil'

export default class MyContribution extends Component {

    constructor() {
        super();
        this.state = {
            isRefreshing: true,
            rank: 0,
            liveCount: 0,
            giftCount: 0,
            wCoinCount: 0
        }
        this._onRefresh = this._onRefresh.bind(this);
        this.getRedCountText = this.getRedCountText.bind(this);
    }

    _onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            if(this._isMounted){
                this.setState({isRefreshing:false})
            }
        }, 5000);
    }

    componentWillMount(){
        this._isMounted = true;
        this._onRefresh();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    getRedCountText(prefixText, endfixText, count, marginTop) {
        return (
            <Text style={{ ...styles.basicText, marginTop: marginTop, fontSize: 13, color: ResourceUtil.colors.color4 }}>
                {prefixText}
                <Text style={{ ...styles.basicText, marginTop: marginTop, fontSize: 13, color: ResourceUtil.colors.color15 }}>
                    {count}
                </Text>
                {endfixText}
            </Text>
        );
    }

    render() {
        return (
            <ScrollView
                style={styles.root}
                refreshControl={
                    <RefreshControl
                        style={{ flexDirection: 'column', alignItems: 'center' }}
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                showsVerticalScrollIndicator={false}
                >
                <Image
                    style={styles.headImage}
                    source={{ uri: 'http://image.xinmin.cn/2013/04/23/20130423160116689534.jpg' }}
                    resizeMode='cover'
                    resizeMethod='resize'
                />
                <Text style={{ ...styles.basicText, color: ResourceUtil.colors.color3, fontSize: 13, marginTop: 18, color: ResourceUtil.colors.color3 }}>
                    全网排名第
                </Text>
                <Text style={{ ...styles.basicText, color: ResourceUtil.colors.color3, fontSize: 40, marginTop: 2, color: ResourceUtil.colors.color3 }}>
                    {this.state.rank}
                </Text>
                {this.getRedCountText('总计 ', ' 场直播中', this.state.liveCount, 31)}
                {this.getRedCountText('送出 ', ' 件礼物', this.state.giftCount, 5)}
                {this.getRedCountText('价值 ', ' 鲸币', this.state.wCoinCount, 5)}
            </ScrollView>
        );
    }
}

const styles = {
    root: {
        width:'auto'
    },
    headImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 0,
        marginTop: 40,
        alignSelf: 'center'
    },
    basicText: {
        textAlign: 'center'
    },

}