/**
 * 路由配置
 */

import {StackNavigator, SafeAreaView} from 'react-navigation';
import {Platform} from 'react-native';
import Demo from '../pages/Demo'
import ContributionTab from '../pages/ContributionTab'


const RootNavigator = StackNavigator({
    DemoMain: {
        screen: Demo
    },
    ContributionTab: {
        screen: ContributionTab
    },
    Index: {
        name:'demo',
        screen: Demo
    }
}, {
    initialRouteName: 'Index',
    // headerMode: 'none',

    mode: Platform.OS === 'ios'
        ? 'modal'
        : 'card'
});

export default RootNavigator;