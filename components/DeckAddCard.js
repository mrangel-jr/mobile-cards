import React, {Component} from 'react';
import {addCard} from '../actions';
import {View,Text,TextInput} from 'react-native';
import CardButton from './CardButton';
import {black,white} from '../utils/colors';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class DeckAddCard extends Component {

    state = {
        question:'',
        answer:'',
    }

    changeQuestion = (question) => {
        this.setState({
            question,
        });
    }

    changeAnswer = (answer) => {
        this.setState({
            answer,
        });
    }

    onSubmit = () => {

        const {item,quizTitle} = this.props;

        item.questions.push(this.state);

        console.log(this.state);

        this.props.dispatch(addCard({
          [quizTitle]:item,
        }));

        //Set Question/answer in DB

        this.setState(() => ({ question:'', answer:'' }));

        this.props.navigation.navigate('DeckQuiz');

    }

    // goBack = () => {
    //     const backAction = NavigationActions.back({
    //         key: 'DeckQuiz',
    //     });
    //     return this.props.navigation.dispatch(backAction);
    // }


    render() {
        /* style={styles.inputText} */
        const {question, answer} = this.state;
        return (
            <View>
                <View>
                    <Text>Enter your question</Text>
                    <TextInput
                        placeholder="Your question"
                        onChangeText={(text) => this.changeQuestion(text)}
                        value={question}
                        />
                </View>
                <View>
                    <Text>Enter your answer</Text>
                    <TextInput
                        placeholder="Your anwser"
                        onChangeText={(text) => this.changeAnswer(text)}
                        value={answer}
                        />
                </View>
                <CardButton style={{backgroundColor:black}} onPress={this.onSubmit}>
                    <Text style={{color:white}}>Submit</Text>
                </CardButton>
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

export default connect(mapStateToProps)(DeckAddCard);
