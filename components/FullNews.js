import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button ,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

class FullNews extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        //console.log(props)
    }
    render(){
        return(
            <WebView source={{uri:this.props.route.params.uri}}></WebView>
        )
    }
}
export default FullNews;