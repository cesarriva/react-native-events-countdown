import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                })),
            });
        }, 1000)

        const events = require('../../db.json').events;
        this.setState({ events: events });
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={(item) => item.id} />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

export default EventList;