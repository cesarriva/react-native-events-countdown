import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: () => ({ title: 'Your Events' })
  },
  EventForm: {
    screen: EventForm,
    navigationOptions: () => ({ title: 'Add an event' })
  },
});

const App = createAppContainer(MainNavigator);
export default App;
