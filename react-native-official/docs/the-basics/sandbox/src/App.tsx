import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {PizzaTranslator, ScrollViewTest} from './components';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <PizzaTranslator />
        <ScrollViewTest />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
});

export default App;
