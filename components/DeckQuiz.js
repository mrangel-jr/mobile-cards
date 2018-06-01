import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CardButton from './CardButton';
import {black,white,gray} from '../utils/colors';

class DeckQuiz extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.state.params.quizTitle}`,
        };
    };

    addCard = () => {
        const {quizTitle} = this.props;
        return this.props.navigation.navigate(
            'DeckAddCard',
            { quizTitle }
        );
    }

    render() {

        const {item} = this.props;

        const {title,questions} = item;

        console.log(questions);

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{questions.length} cards</Text>
                </View>
                <View style={styles.btnContainer}>
                    <CardButton style={styles.btnAddCard} onPress={this.addCard}>
                        <Text style={styles.txtAddCard}>Add Card</Text>
                    </CardButton>
                    <CardButton style={styles.btnStartQuiz} onPress={() => console.log(`It's a trap!!`)}>
                        <Text style={styles.txtStartQuiz}>Start Quiz</Text>
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
    btnAddCard: {
        backgroundColor: white,
        borderColor:black,
        borderWidth: 1,
        marginTop:10,
        marginBottom:10,
    },
    txtAddCard: {
        fontSize: 20,
        color:black,
    },
    btnStartQuiz: {
        backgroundColor: black,
        marginTop:10,
        marginBottom:10,
    },
    txtStartQuiz: {
        fontSize: 20,
        color:white,
    },
});

export default connect(mapStateToProps)(DeckQuiz);
