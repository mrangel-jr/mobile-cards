import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import DeckItem from './DeckItem';

class DeckList extends Component {

    

    render() {
        // const items = Object.map(this.state)
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        );
    }
}

export default DeckList;
