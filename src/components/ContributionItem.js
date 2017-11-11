import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import ResourceUtil from '../utils/ResourceUtil'
import DisplayUtil from '../utils/DisplayUtil'

export default class ContributionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.image }}
                    resizeMode='cover'
                    resizeMethod='resize'
                />
                <View style={styles.centerText}>
                    <Text style={styles.topText}>
                        {this.props.name}
                    </Text>
                    <Text style={styles.bottomText}>
                        贡献<Text style={styles.countText}>{this.props.wCoinCount}</Text>鲸币
                    </Text>
                </View>


                <Text style={styles.rankText}>
                    {this.props.rank}
                </Text>
            </View>
        );
    }
}

ContributionItem.propTypes = {
    image: PropTypes.string,
    wCoinCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string,
    rank: PropTypes.string
}

const styles = {
    item: {
        width:DisplayUtil.screenWidth,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'stretch'
    },
    image: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 0,
        marginLeft: 20,
        alignSelf: 'center'
    },
    centerText: {
        marginLeft: 10,
        flexDirection: 'column',
        alignItems:'flex-start'
    },
    topText: {
        fontSize: 12,
        color: ResourceUtil.colors.color3
    },
    bottomText: {
        fontSize: 11,
        color: ResourceUtil.colors.color5
    },
    countText: {
        color: ResourceUtil.colors.color15
    },
    rankText: {
        position: 'absolute',
        right: 27,
        fontSize: 13,
        color: ResourceUtil.colors.color5
    }
}