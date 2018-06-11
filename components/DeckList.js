import React, {Component} from 'react';
import {FlatList} from 'react-native';
import DeckItem from './DeckItem';
import { addData } from '../actions';
import { getDecks, resetKey } from '../utils/api';
import { connect } from 'react-redux';

class DeckList extends Component {

    state = {
        ready: false,
    }

    componentDidMount () {

        const {dispatch} = this.props;

        getDecks()
            .then((results) => {
                if (results !== null) {
                    Object.keys(results).map((key, index) => {
                        const data = results[key].key;
                        dispatch(addData({
                            [key]:data,
                        }));
                     });
                }
            });
    }


    renderItem(row) {
        return  <DeckItem item={row.item} quizId={row.index} navigation={this.props.navigation}/>;
    }

    render() {
        const {items} = this.props === null ? [] : this.props;

        return (
            <FlatList
                keyExtractor={(item, index) => String(index)}
                data={items}
                renderItem={(item) => this.renderItem(item)}
            />
        );
    }
}

function mapStateToProps(state) {

    const data = Object.values(state);

    return {
        items:data,
    };

}

export default connect(mapStateToProps)(DeckList);
