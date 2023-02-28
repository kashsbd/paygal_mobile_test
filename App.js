import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.bgStyle}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
