import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [text, setText] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const res = await AsyncStorage.getItem('myKey');
    setResult(res);
  };

  const onChange = (text) => {
    setText(text);
  };

  const onSubmit = () => {
    AsyncStorage.setItem('myKey', text);
  };
  return (
    <View style={styles.container}>
      <Text>Text from storage: </Text>
      <Text>{result ? result : '-'}</Text>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        value={text}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    padding: 10,
    marginVertical: 20,
  },
});

export default App;
