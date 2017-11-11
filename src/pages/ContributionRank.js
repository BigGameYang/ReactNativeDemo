import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ContributionItem from '../components/ContributionItem'


export default class ContributionRank extends Component {


    constructor() {
        super();
        this.state = {
            datas: [
                {
                    image: 'http://image.xinmin.cn/2013/04/23/20130423160116689534.jpg',
                    rank: 'NO1',
                    name: 'dhsajdksa',
                    wCoinCount: '300'
                }
            ]
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.datas}
                renderItem={({ item }) =>
                    <ContributionItem
                        {...item} />} />
        );
    }
}