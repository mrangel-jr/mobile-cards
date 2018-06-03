import React, {Component} from 'react';
import {View,Text, Easing, StyleSheet} from 'react-native';
import FlipView from 'react-native-flip-view-next';
import {red, green, black, white} from '../utils/colors';
import {connect} from 'react-redux';
import CardButton from './CardButton';

class DeckStartQuiz extends Component {

      state = {
        total:0,
        correctAnswer: 0,
        isCorrect: null,
        isFlipped: false,
        index:0,
    }

    render()  {
        return (
          <FlipView style={styles.flipContainer}
                    front={this._renderFront()}
                    back={this._renderBack()}
                    isFlipped={this.state.isFlipped}
                    flipAxis="y"
                    flipEasing={Easing.out(Easing.ease)}
                    flipDuration={500}
                    perspective={1000}/>
        );
    }

    _renderFront = () => {
        const {total} = this.props;
        const {index} = this.state;
        const {question} = this.props.questions[index];

        return (
            <View style={styles.container}>
                <Text style={styles.txtIndex}>{ index + 1}/{total}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{question}</Text>
                </View>
                <CardButton style={styles.textContainer} onPress={this._flipToBack}>
                    <Text style={styles.subTitle}>Answer</Text>
                </CardButton>
            </View>
        );
    };

    _renderBack = () => {
        const {index,isCorrect} = this.state;
        const {answer} = this.props.questions[index];
        const {total} = this.props;

        return (

            <View style={styles.container}>
                <Text style={styles.txtIndex}>{ index + 1}/{total}</Text>
                <View style={styles.textContainer}>
                    {(isCorrect == null) && (
                        <Text style={styles.title}>{answer}</Text>
                    )}
                    {(isCorrect === false) && (
                        <Text style={styles.title}>No!</Text>
                    )}
                    {(isCorrect) && (
                        <Text style={styles.title}>Yes!</Text>
                    )}
                </View>
                <View style={styles.btnContainer}>
                    <CardButton style={styles.btnCorrect} onPress={this._onCorrectAnswer}>
                        <Text style={styles.txtLabel}>Correct</Text>
                    </CardButton>
                    <CardButton style={styles.btnIncorrect} onPress={this._onIncorrectAnswer}>
                        <Text style={styles.txtLabel}>Incorrect</Text>
                    </CardButton>
                </View>
            </View>
        );
    };

    _onCorrectAnswer = () => {
        const {correctAnswer} = this.state;
        this.setState({
            isCorrect:true,
            correctAnswer: correctAnswer + 1,
        });
        setTimeout(() => {
            this._flipToFront();
        }, 2000);
    }

    _onIncorrectAnswer = () => {
        this.setState({
            isCorrect:false,
        });

        setTimeout(() => {
            this._flipToFront();
        }, 2000);
    }

    _flipToBack = () => {
        this.setState({
            isFlipped: !this.state.isFlipped,
            isCorrect:null,
        });
    }

    _flipToFront = () => {
        let {index} = this.state;
        const {total} = this.props;

        index = index + 1;

        this._goResult(index,total);
    };

    _goResult = (index,total) => {
        const {correctAnswer} = this.state;
        const {quizTitle} = this.props;
        const percentual = Math.floor( correctAnswer / total * 100);

        (index === total) ? this.props.navigation.navigate(
            'DeckResultQuiz',
            {
                percentual,
                quizTitle,
            }
        ) : this.setState({isFlipped: !this.state.isFlipped,
            index,
        });
    }
}

function mapStatetoProps(state,{navigation}) {
    const {quizTitle} = navigation.state.params;
    return {
        quizTitle,
        items: state[quizTitle],
        questions: state[quizTitle].questions,
        total: Number(state[quizTitle].questions.length),
    };
}

const styles = StyleSheet.create({
    flipContainer: {
        flex:1,
    },
    container: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
        flex:1,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 42,
        color: black,
    },
    subTitle: {
        marginTop:30,
        fontSize:30,
        color: red,
    },
    btnContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnCorrect: {
        backgroundColor: green,
        borderColor:green,
        borderWidth: 1,
        marginTop:10,
        marginBottom:10,
    },
    btnIncorrect: {
        backgroundColor: red,
        marginTop:10,
        marginBottom:10,
    },
    txtLabel: {
        fontSize: 20,
        color:white,
    },
    txtIndex: {
        fontSize: 20,
        color:black,
    },
});


export default connect(mapStatetoProps)(DeckStartQuiz);
