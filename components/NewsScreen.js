import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button ,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import CustomRow from "./CustomRow" 
class NewsScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={itemList:[]}
    }


    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d65c1e19945c406498433bcc7e974a89")
        .then((data)=> data.json())
        .then((data)=>{
            //console.log(data)
            this.setState({itemList:data.articles})
        })
        .catch(function(error){

        })
    }

    render(){
        //const navigation = this.props.navigation;
        //console.log(navigation)
        return(
             <View>
                <FlatList
                        data={this.state.itemList}
                        renderItem={({ item }) => <CustomRow
                            title={item.title}
                            author={item.author}
                            source={item.source}
                            url={item.url}
                            navigation={this.props.navigation}
                        />}
                />
             </View>
        )
    }

}



export default NewsScreen;