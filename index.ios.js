import React from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

var Weekdays = React.createClass({
  render: function() {
    return  (
      <View style={styles.container}>
        {this.days()}
      </View>
          )
  },
  days: function () {
    var daysItems = [];

    for(var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd')
      daysItems.push(
        <DayItem day={day} daysUntils={i} key={i}/>
      )
    }
    return daysItems;
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
