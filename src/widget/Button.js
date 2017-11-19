import React, {Component} from 'react'
import {Text,TouchableHighlight} from 'react-native'


export default class Button extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <TouchableHighlight 
                onLongPress={this.props.onLongClick?this.props.onLongClick:null}
                onPress={this.props.onClick?this.props.onClick:null}>
                <Text style={styles.defaultButton}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles ={
    defaultButton:{
        
    }
}