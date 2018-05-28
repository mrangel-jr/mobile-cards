import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

class DeckList extends Component {

    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        );
    }
}

export default DeckList;
