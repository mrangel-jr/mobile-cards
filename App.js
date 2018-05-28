import React from 'react';
import { StyleSheet, View, StatusBar  } from 'react-native';
import {black} from './utils/colors';
import {Constants} from 'expo';
import MainNavigator from './components/MainNavigator';

function FlashCardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashCardStatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
