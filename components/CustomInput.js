import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

const CustomInput = ({ title, textInput, setFunction }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={textInput}
        onChangeText={(text) => setFunction(text)}
        style={styles.input}
        contextMenuHidden={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop:10
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default CustomInput;
