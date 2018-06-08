import React, {Component} from 'react';
import {View,Text,FlatList,TouchableHighlight,StyleSheet,TouchableOpacity} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {MaterialIcons} from '@expo/vector-icons';
import {gray} from '../utils/colors';
import {connect} from 'react-redux';

class DeckShowQuestions extends Component {

    constructor(props) {
        super(props);
        // this._renderRow = this._renderRow.bind(this)
    }

    _renderRow = (row) => {
        let swipeLeftBtns = [
            {
                component: (<View
                            style={{flex: 1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <MaterialIcons
                                    name="archive"
                                    size={25}
                                    color={gray}
                                />
                            </View>),
                onPress: () => console.log('Arquivar'),
            },
        ];
        let swipeRightBtns = [
            {
                component: (<View
                            style={{flex: 1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <MaterialIcons
                                    name="delete"
                                    size={25}
                                    color={gray}
                                />
                            </View>),
                onPress: () => console.log('Deletar'),
            },
        ];
        console.log(row);
        return (
            <Swipeout
                autoClose={true}
                left={swipeLeftBtns}
                right={swipeRightBtns}
                style={styles.liContainer}>
                <Text style={styles.li}>{row.item}</Text>
            </Swipeout>
        );
    }

    render() {
        const {questions} = this.props;
        return (
          <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => String(index)}
                data={questions}
                renderItem={(item) => this._renderRow(item)}
            />
          </View>
        );
      }
}

function mapStateToProps(state,{navigation}) {
    const {quizTitle,questions} = navigation.state.params;
    console.log(`questions ==> ${JSON.stringify(questions)}`);
    console.log(`questions2 ==> ${questions}`);

    return {
        quizTitle,
        questions: questions.map((item) => item.question),
    };
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      flex: 1,
    },
    listview: {
      flex: 1,
    },
    li: {
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 14,
      paddingBottom: 16,
    },
    liContainer: {
      flex: 2,
    },
    liText: {
      color: '#333',
      fontSize: 16,
    },
    navbar: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderColor: 'transparent',
      borderWidth: 1,
      justifyContent: 'center',
      height: 44,
    },
    navbarTitle: {
      color: '#444',
      fontSize: 16,
      fontWeight: '500',
    },
    statusbar: {
      backgroundColor: '#fff',
      height: 22,
    },
  });

export default connect(mapStateToProps)(DeckShowQuestions);
/*
                {/* renderRow={this._renderRow.bind(this)} */
                /* style={styles.listview} */
