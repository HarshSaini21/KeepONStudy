import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class Chemistry extends React.Component {
    render(){
     return(
        <View>
            <TouchableOpacity onPress={()=>{
               this.props.navigation.navigate("Matter");
            }}>
               <Text> Matter In Our Surroundings </Text>
               
            </TouchableOpacity>
        </View>
     )
   }
}

const styles = Stylesheet.create({

})