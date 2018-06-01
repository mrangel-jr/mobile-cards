import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import DeckItem from './DeckItem';
import { connect } from 'react-redux';

class DeckList extends Component {

    state = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces',
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event',
            },
          ],
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            },
          ],
        },
      };

    // renderItem(row) {
    //     return (
    //         <NoteListItem item={row.item} onPress={() => this.props.onSelectItem(info.item)}/>
    //     );
    // }

    renderItem(row) {
        // console.log(item);
        return <DeckItem item={row.item}/>;
    }

    render() {

        console.log(this.props.items);

        return (
            <FlatList
                keyExtractor={(item, index) => index}
                data={this.props.items}
                renderItem={(item) => this.renderItem(item)}
            />
        );
    }
}

function mapStateToProps(state) {

    const data = Object.values(state);

    return {
        items: data,
    };

}


export default connect(mapStateToProps)(DeckList);
