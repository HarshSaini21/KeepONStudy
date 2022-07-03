import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  Modal
} from "react-native";

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
   
    };
  }
 
  
  render() {
    return (
      <View>
        <View>
          
        </View>
        <View>
            <TouchableOpacity><Text>Maths</Text></TouchableOpacity>
            <TouchableOpacity><Text>Physics</Text></TouchableOpacity>
            <TouchableOpacity><Text>Chemistry</Text></TouchableOpacity>
            <TouchableOpacity><Text>Biology</Text></TouchableOpacity>
            <TouchableOpacity><Text>History</Text></TouchableOpacity>
            <TouchableOpacity><Text>Civics</Text></TouchableOpacity>
            <TouchableOpacity><Text>Geography</Text></TouchableOpacity>
            <TouchableOpacity><Text>Quiz</Text></TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})
