import React, {Component} from 'react';
import {addCard} from '../actions';
import {View,Text,TextInput,StyleSheet, Alert} from 'react-native';
import CardButton from './CardButton';
import {black,white, gray} from '../utils/colors';
import {addCardToDeck} from '../utils/api';
import {connect} from 'react-redux';

class DeckAddCard extends Component {

    state = {
        question:'',
        answer:'',
    }

    changeQuestion = (question) => {
        this.setState(() => ({
            question,
        }));
    }

    changeAnswer = (answer) => {
        this.setState(() => ({
            answer,
        }));
    }

    onSubmit = () => {

        if (this.state.question === '' || this.state.answer === ''){
            return Alert.alert('All fields are mandatory.');
        }

        const {item,quizTitle} = this.props;

        item.questions.push(this.state);

        this.props.dispatch(addCard({
          [quizTitle]:item,
        }));

        addCardToDeck(quizTitle, item);

        this.setState(() => ({ question:'', answer:'' }));

        this.goBack();

    }

    goBack = () => {
        this.props.navigation.goBack(null);
        this.props.navigation.state.params.onRefresh({ ready: false });
    }


    render() {

        const {question, answer} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Enter your question*</Text>
                    <TextInput
                        placeholder="Your question"
                        style={styles.inputText}
                        onChangeText={(text) => this.changeQuestion(text)}
                        value={question}
                        />
                </View>
                <View style={styles.textContainer}>
                    <Text>Enter your answer*</Text>
                    <TextInput
                        placeholder="Your anwser"
                        style={styles.inputText}
                        onChangeText={(text) => this.changeAnswer(text)}
                        value={answer}
                        />
                </View>
                <View style={styles.btnContainer}>
                    <CardButton style={styles.btnSubmit} onPress={this.onSubmit}>
                        <Text style={styles.txtSubmit}>Submit</Text>
                    </CardButton>
                </View>
            </View>
        );
    }
}

function mapStateToProps (state, { navigation }) {
    const { quizTitle } = navigation.state.params;

    return {
        quizTitle,
        item: state[quizTitle],
    };
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
        flex:1,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    inputText: {
        fontSize:15,
        borderColor: black,
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: 42,
        color: black,
    },
    subTitle: {
        marginTop:30,
        fontSize:30,
        color: gray,
    },
    btnContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnSubmit: {
        backgroundColor: black,
        marginTop:10,
        marginBottom:10,
    },
    txtSubmit: {
        fontSize: 20,
        color:white,
    },
});

export default connect(mapStateToProps)(DeckAddCard);
