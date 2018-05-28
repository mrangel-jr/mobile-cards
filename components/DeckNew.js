import React, {Component} from 'react';
import {
        View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
    } from 'react-native';
import {black,white} from '../utils/colors';

class DeckNew extends Component {
    state = {
        items:null,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textQuestion}>
                    What is the title of your new deck ?
                </Text>
                <KeyboardAvoidingView
                    behavior="padding" enabled>
                    <View>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Deck Title"
                        />
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.textSubmit}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

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

export default DeckNew;

