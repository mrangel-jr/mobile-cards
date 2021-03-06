import React, {Component} from 'react';
import {
        View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Alert,
    } from 'react-native';
import {black,white} from '../utils/colors';
import { addData } from '../actions';
import {saveDeckTitle} from '../utils/api';
import {getBasicStructure} from '../utils/helpers';
import { connect } from 'react-redux';

class DeckNew extends Component {
    state = {
        title:'',
    }

    changeText = (title) => {
        this.setState(() => ({
          title,
        }));
    }

    submit = () => {

        const {title} = this.state;
        const {items} = this.props;

        if (title === ''){
            return Alert.alert('All fields are mandatory.');
        }

        if (Object.keys(items).includes(title) === true) {
            return Alert.alert('Can not insert an existing title.');
        }

        const value = getBasicStructure(title).key;

        this.props.dispatch(addData({
          [title]:value,
        }));

        saveDeckTitle(title);

        this.setState(() => ({ title:'' }));

        this.toDeckQuiz(title);

    }

    toDeckQuiz = (quizTitle) => {
        this.props.navigation.navigate(
            'DeckQuiz',
            { quizTitle,
            }
        );
    }

    render() {

        const {title} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.textQuestion}>
                    What is the title of your new deck ?
                </Text>
                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Deck Title"
                        onChangeText={(text) => this.changeText(text)}
                        value={title}
                    />
                </View>
                <TouchableOpacity style={styles.btnSubmit} onPress={this.submit}>
                    <Text style={styles.textSubmit}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        key: state.title,
        items:state,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
    },
    textQuestion: {
        fontSize:30,
        color: black,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    inputText: {
        fontSize:15,
        borderColor: black,
        borderRadius: 2,
        borderWidth: 2,
        paddingLeft: 70,
        paddingRight: 70,
        textAlign: 'center',
    },
    btnSubmit: {
        padding:10,
        paddingLeft: 70,
        paddingRight: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:black,
    },
    textSubmit: {
        alignItems: 'center',
        justifyContent: 'center',
        color: white,
        fontSize:15,
    },
});

export default connect(mapStateToProps)(DeckNew);
