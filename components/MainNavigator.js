import React from 'react';
import {View} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import DeckList from './DeckList';
import DeckItem from './DeckItem';
import DeckNew from './DeckNew';
import {black, white, gray} from '../utils/colors';


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
    swipeEnabled: true,
  },
  tabBarOptions: {
    activeTintColor: black,
    inactiveTintColor: gray,
    style: {
      height: 56,
      backgroundColor: white,
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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      },
    },
  },
});

  const MainNavigator = () => {
      return (
          <Navigator/>
      );
  };

  export default MainNavigator;
