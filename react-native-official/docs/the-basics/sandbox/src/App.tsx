import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FlatListTest, PizzaTranslator, ScrollViewTest, SectionListTest} from './components';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.scrollView}>
        <PizzaTranslator />
        <ScrollViewTest />
        <FlatListTest />
        <SectionListTest />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
});

export default App;
