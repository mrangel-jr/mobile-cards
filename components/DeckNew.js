import React, {Component} from 'react';
import {
        View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
    } from 'react-native';
import {black,white} from '../utils/colors';
import { addData } from '../actions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class DeckNew extends Component {
    state = {
        questions:[],
        title:'',
    }

    changeText = (title) => {
        this.setState(() => ({
          title,
        }));
    }

    submit = () => {

        const {title} = this.state;
        const value = this.state;

        this.props.dispatch(addData({
          [title]:value,
        }));

        this.setState(() => ({ questions:[], title:'' }));

        this.toHome();

        // submitEntry({key,entry});

        // clearLocalNotification()
        // .then(setLocalNotification);
    }

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back({key:'DeckNew'}));
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
