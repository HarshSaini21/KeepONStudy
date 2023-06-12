import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class Biology extends React.Component {
    render(){
     return(
        <View>
            <TouchableOpacity onPress={()=>{
               this.props.navigation.navigate("Fundamental");
            }}>
               <Text> The FundamentalUnit Of Life  </Text>
               
            </TouchableOpacity>
        </View>
     )
   }
}

const styles = Stylesheet.create({

})