import React from 'react';
import {createMaterialTopTabNavigator, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import DeckList from './DeckList';
import DeckItem from './DeckItem';
import DeckNew from './DeckNew';
import {black, white} from '../utils/colors';


const Tabs = createMaterialTopTabNavigator({
    DeckList: {
      screen: {DeckList},
      navigationOptions: {
        tabBarLabel: 'Decks',
        // tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
      },
    },
    DeckNew: {
      screen: {DeckNew},
      navigationOptions: {
        tabBarLabel: 'New Deck',
        // tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
      },
    },
  }, {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: black,
      style: {
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
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
      screen: {DeckItem},
      navigationOptions: {
        headerTintColor: black,
        headerStyle: {
          backgroundColor: white,
        },
      },
    },
  });

  const MainNavigator = () => {
      return (
            <View>
              <Navigator/>
            </View>
      );
  };

  export default MainNavigator;
