import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button ,FlatList} from 'react-native';
import 'react-native-gesture-handler';
class CustomRow extends React.Component
{
    constructor(props){
        super(props);
        //console.log("%%%%%%%%%%%%%%%%")
        //console.log(props.navigation)
        //console.log("%%%%%%%%%%%%%%%%")
        this.state={}
    }
    render(){
        return(
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("FullNews",{uri:this.props.url})}>
    <View style={{flexDirection:"column",margin:10}}>
        <View flex="10">
            <Text style={{fontSize:15,fontWeight:'bold'}}>{this.props.title}</Text>
        </View>
        <View flex="2" style={{flexDirection:"row"}}>
            <View flex="5">
                <Text style={{fontStyle:"italic"}}>{this.props.author}</Text>
            </View>
            <View flex="10">
            </View>
            <View flex="5">
                <Text style={{fontStyle:"italic"}}>{this.props.source.name}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
    )
    }
}
export default CustomRow;