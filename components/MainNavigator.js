import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation';
import DeckList from './DeckList';
import DeckItem from './DeckItem';
import DeckNew from './DeckNew';
import DeckQuiz from './DeckQuiz';
import DeckAddCard from './DeckAddCard';
import DeckStartQuiz from './DeckStartQuiz';
import DeckResultQuiz from './DeckResultQuiz';
import DeckShowQuestions from './DeckShowQuestions';
import DeckHistoryQuestions from './DeckHistoryQuestions';
import {MaterialIcons} from '@expo/vector-icons';
import {black, white, gray} from '../utils/colors';


const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  DeckNew: {
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

const BottomTabs = createBottomTabNavigator(
  {
    DeckShowQuestions: {
      screen:DeckShowQuestions,
      navigationOptions: {
        tabBarLabel: 'Questions',
      },
    },
    DeckHistoryQuestions: {
      screen: DeckHistoryQuestions,
      navigationOptions: {
        tabBarLabel: 'History',
      },
    },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'DeckShowQuestions') {
          iconName = 'question-answer';
        } else if (routeName === 'DeckHistoryQuestions') {
          iconName = 'history';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      initialRouteName: 'DeckShowQuestions',
      activeTintColor: black,
      inactiveTintColor: gray,
      style: {
        height: 56,
        backgroundColor: white,
      },
    },
  },
);

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
  DeckQuiz: {
    screen: DeckQuiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      },
    },
  },
  DeckAddCard: {
    screen: DeckAddCard,
    navigationOptions: {
      headerTitle: 'Add card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      },
    },
  },
  DeckStartQuiz: {
    screen: DeckStartQuiz,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      },
    },
  },
  DeckResultQuiz: {
    screen: DeckResultQuiz,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      },
    },
  },
  DeckListQuestions: {
    screen: BottomTabs,
    navigationOptions: {
      header: null,
    },
  },
});


  const MainNavigator = () => {
      return (
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Navigator/>
        </KeyboardAvoidingView>
      );
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
  });

  export default MainNavigator;
