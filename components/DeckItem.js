import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {black,gray} from '../utils/colors';

class DeckItem extends Component {

    onClick = () => {
        const {item} = this.props;

        return this.props.navigation.navigate(
                'DeckQuiz',
                { quizTitle: item.title }
        );
    };

    render() {
        const {item} = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={this.onClick}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.questions.length} cards</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop:10,
    },
    title: {
        fontSize: 36,
        color: black,
    },
    subTitle: {
        fontSize:20,
        color: gray,
    },
});


export default DeckItem;

