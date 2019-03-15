import React from 'react';
import { Text, View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: ''
        }

        this.handleAddPress = this.handleAddPress.bind(this);
        this.handleOnTextChange = this.handleOnTextChange.bind(this);
    }

    handleAddPress() {
        console.log(this.state);
        const { navigate } = this.props.navigation;
        navigate('EventList');
    }

    handleOnTextChange(newTitle) {
        this.setState({ title: newTitle });
    }

    render() {
        return (
            <View style={styles.form} >
                <View style={styles.fielContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Event title"
                        spellCheck={false}
                        onChangeText={this.handleOnTextChange}
                        value={this.state.text} />
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    fielContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    textInput: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    addButton: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18
    }
});

export default EventForm