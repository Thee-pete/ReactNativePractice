import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello World!</Text>
      <TouchableOpacity>
        <View>
        <Button title="Click me" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
