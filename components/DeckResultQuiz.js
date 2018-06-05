import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardButton from './CardButton';
import {connect} from 'react-redux';
import {black,white,gray} from '../utils/colors';

class DeckResultQuiz extends Component {

    tryAgain = () => {
        const {quizTitle} = this.props;
        this.props.navigation.navigate(
            'DeckStartQuiz',
            {
                quizTitle,
            }
        );
    }
    
    backToDeck = () => {
        const {quizTitle} = this.props;
        this.props.navigation.navigate(
            'DeckQuiz',
            {
                quizTitle,
            }
        );
    }

    goHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {

        const {percentual} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Your Score</Text>
                    <Text style={styles.subTitle}>{percentual}%</Text>
                </View>
                <View style={styles.btnContainer}>
                    <CardButton style={styles.btnTryAgain} onPress={this.tryAgain}>
                        <Text style={styles.txtTryAgain}>Try Again</Text>
                    </CardButton>
                    <CardButton style={styles.btnBackToBack} onPress={this.backtoDeck}>
                        <Text style={styles.txtBackToDeck}>Back to Deck</Text>
                    </CardButton>
                    <CardButton style={styles.btnGoHome} onPress={this.goHome}>
                        <Text style={styles.txtGoHome}>Go Home</Text>
                    </CardButton>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state,{navigation}) {
    const {percentual,quizTitle} = navigation.state.params;
    return {
        percentual,
        quizTitle,
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
        alignItems: 'center',
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
    btnTryAgain: {
        backgroundColor: white,
        borderColor:black,
        borderWidth: 1,
        marginTop:10,
        marginBottom:10,
    },
    txtTryAgain: {
        fontSize: 20,
        color:black,
    },
    btnGoHome: {
        backgroundColor: white,
        borderColor:black,
        borderWidth: 1,
        marginTop:10,
        marginBottom:10,
    },
    txtGoHome: {
        fontSize: 20,
        color:black,
    },
    ,
    btnBackToBack: {
        backgroundColor: black,
        marginTop:10,
        marginBottom:10,
    },
    txtBackToDeck: {
        fontSize: 20,
        color:white,
    },
});

export default connect(mapStateToProps)(DeckResultQuiz);
