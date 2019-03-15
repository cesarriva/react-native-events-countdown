import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

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
        const { navigate } = this.props.navigation;
        return (
            <>
                <FlatList
                    style={styles.list}
                    data={this.state.events}
                    renderItem={({ item }) => <EventCard event={item} />}
                    keyExtractor={(item) => item.id} />

                <ActionButton
                    onPress={() => navigate('EventForm')}
                    buttonColor="rgba(231, 76, 60, 1)" />
            </>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    }
});

export default EventList;