import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {black,gray} from '../utils/colors';

class DeckItem extends Component {

    render() {
        const {item} = this.props;

        console.log(item);

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.questions.length} cards</Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop:10,
    },
    title: {
        fontSize: 20,
        color: black,
    },
    subTitle: {
        fontSize:14,
        color: gray,
    },
});


export default DeckItem;

