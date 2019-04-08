import React from 'react';
import { Text, View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime } from '../../api';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            showDatePicker: false
        }

        this.handleAddPress = this.handleAddPress.bind(this);
        this.handleOnTextChange = this.handleOnTextChange.bind(this);
        this.handleDatePress = this.handleDatePress.bind(this);
        this.handleDatePicked = this.handleDatePicked.bind(this);
        this.handleDatePickerHide = this.handleDatePickerHide.bind(this);
    }

    handleAddPress() {
        console.log(this.state);
        const { navigate } = this.props.navigation;
        navigate('EventList');
    }

    handleOnTextChange(newTitle) {
        this.setState({ title: newTitle });
    }

    handleDatePress() {
        this.setState({ showDatePicker: true });
    }

    handleDatePicked(date) {
        this.setState({ date: date });
        this.handleDatePickerHide();
    }

    handleDatePickerHide() {
        this.setState({ showDatePicker: false });
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
                        value={this.state.title} />
                    <TextInput
                        style={[styles.textInput, styles.borderTop]}
                        placeholder="Event date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date)}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress} />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.handleDatePickerHide} />
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
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5
    }
});

export default EventForm