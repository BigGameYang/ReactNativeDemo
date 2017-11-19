/**
 * 贡献榜主页
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper'
import DisplayUtil from '../utils/DisplayUtil'
import ResourceUtil from '../utils/ResourceUtil'
import MyContribution from './MyContribution'
import ContributionRank from './ContributionRank'
import { getTotalCount } from '../api/VRGiftApi'
import RequestUtil from '../utils/RequestUtil'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'
import {SafeAreaView} from 'react-navigation'

const pages = [
    '我的贡献',
    '贡献榜',
    '成员榜'
]

const strUserCountPre = '本场直播共 '
const strUserCountEnd = ' 位粉丝，送出了 '
const strGiftCountEnd = ' 件礼物，总价值 '
const strWCoinCountEnd = ' 鲸币。'


export default class ContributionTab extends Component {
    static navigationOptions = {
        header : null,
    };

    constructor(props) {
        super(props);
        this.state = {
            fansCount: 0,
            giftCount: 0,
            wCoinCount: 0,
            selectedIndex: 0,
            pages
        }
        this.renderItemPage = this.renderItemPage.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this._getTotalCount = this._getTotalCount.bind(this);
    }

    renderItems(datas) {
        datas.map(data => {
            return renderItemPage(data);
        });
    }

    _getTotalCount() {
        getTotalCount('356ffa660d3c468d9172a10ee66f1206')
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({
                    fansCount: data.totalUserCount,
                    giftCount: data.totalGiftCount,
                    wCoinCount: data.totalWhaleyCurrentCount
                });
            })
            .catch(error => {
                console.log(error);
                const errorObj = RequestUtil.getErrorObj(error);
                console.log(errorObj);
            });
    }

    componentDidMount() {
        this._getTotalCount();
    }


    renderItemPage(data) {
        let node;
        if (data === '我的贡献') {
            node = (
                <MyContribution />
            );
        } else if (data === '贡献榜') {
            node = (
                <ContributionRank />
            );
        } else {
            node = (
                <Text style={style.pageText}>
                    {data}
                </Text>
            );
        }
        return (
            <View tabLabel={data} key={data} style={style.page}>
                {node}
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={style.root}>
                <Text style={style.totalNormalText}>
                    {strUserCountPre}
                    <Text style={style.totalCountText}>
                        {this.state.fansCount}
                    </Text>
                    {strUserCountEnd}
                    <Text style={style.totalCountText}>
                        {this.state.giftCount}
                    </Text>
                    {strGiftCountEnd}
                    <Text style={style.totalCountText}>
                        {this.state.wCoinCount}
                    </Text>
                    {strWCoinCountEnd}
                </Text>
                <ScrollableTabView
                    style={style.viewPager}
                    initialPage={0}
                    onChangeTab={(index, ref) => this.setState({ selectedIndex: index })}
                    renderTabBar={() =>
                        <DefaultTabBar
                            activeTextColor={colors.color1}
                            inactiveTextColor={colors.color2}
                            underlineStyle={{ backgroundColor: colors.color1, paddingLeft: 30, paddingRight: 30, borderRadius: 10, borderWidth: 0, }}
                            onLayout={layout => console.log(layout)}
                        />}
                >
                    {this.state.pages.map(data => this.renderItemPage(data))}
                </ScrollableTabView>

            </SafeAreaView>
        );
    }
}


const colors = ResourceUtil.colors;

const style = StyleSheet.create({
    root: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:colors.color12
    },
    totalNormalText: {
        color: colors.color4,
        textAlign: 'center',
        marginTop: 73,
        marginBottom: 41,
        marginLeft: 43,
        marginRight: 43
    },
    totalCountText: {
        color: colors.color15
    },
    viewPager: {
    },
    page: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    pageText: {
        color: colors.color2,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    tabIndicator: {
        width: DisplayUtil.screenWidth,
        height: 48,
    }
});