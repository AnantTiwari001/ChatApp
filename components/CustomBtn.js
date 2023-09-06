import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomBtn=({text, dark})=>{
  return(
    <View style={[styles.container, dark?(styles.darkContainer):(null)]} >
      <Text style={[styles.text, dark?(styles.darkText):(null)]} >{text}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:30,
    paddingVertical:12,
    borderRadius:20,
    backgroundColor:'#22B07D',
    borderWidth: 1,
  },
  text:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:16,
    color:'#f7f7f7',
    fontWeight:500
  },
  darkContainer:{
    backgroundColor:'#F7F7F7',
    borderWidth: 1,
  },
  darkText:{
    color:'#121212'
  }
})

export default CustomBtn;