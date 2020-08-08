import React from 'react';
import { StyleSheet, Text, View,TextInput,Header, Alert ,TouchableOpacity} from 'react-native';

 class WriteScreen extends React.Component {
    constructor(){
        super();
        this.state={
          text:"",
        }
      }
    render(){
  return (
      <View>
    <Header
    backgroundColor="pink"
    centerComponent={{text:'write your story!',style:{color:'white',fontSize:22,fontWeight:'bold'}}}/>
    
    <TextInput
    style={styles.textBox}
    onChangeText={(text)=>{
      this.setState({text:text});
    }}
    value={this.state.text}
    />
    <Text style={styles.buttonText}>{this.state.displayText}</Text>

    <TouchableOpacity 
onPress={()=>{
  Alert.alert('submitted!')
}}>
<Text style={styles.text}>sumbit</Text>
</TouchableOpacity>
    </View>
  );
    }
}
const styles=StyleSheet.create({
    textBox:{
      marginTop:200,
      width:250,
      height:300,
      alignSelf:'center',
      borderWidth:4,
      textAlign:'center',
      outline:'none',
      color:'black'
    },
  text:{
      alignSelf: 'center',
      fontSize:25,
      fontWeight:'bold'
  },
   buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      margin:10
    }
  })
  
export default WriteScreen;