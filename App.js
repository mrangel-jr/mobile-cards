import React from 'react';
import { StyleSheet, View  } from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import DeckList from './components/DeckList';
import DeckItem from './components/DeckItem';
import DeckNew from './components/DeckNew';
import {black, white, purple} from './utils/colors';

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  NewDeck: {
    screen: DeckNew,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
}, {
  navigationOptions: {
  },
  tabBarOptions: {
    activeTintColor: black,
    style: {
      height: 56,
      backgroundColor: purple,
      /*shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,*/
    },
  },
});

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckItem: {
    screen: DeckItem,
    navigationOptions: {
      headerTintColor: black,
      headerStyle: {
        backgroundColor: white,
      },
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
