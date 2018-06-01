import React, {Component} from 'react';
import {FlatList} from 'react-native';
import DeckItem from './DeckItem';
import { connect } from 'react-redux';

class DeckList extends Component {

    renderItem(row) {
        return  <DeckItem item={row.item} quizId={row.index} navigation={this.props.navigation}/>;
    }

    render() {

        return (
            <FlatList
                keyExtractor={(item, index) => String(index)}
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
