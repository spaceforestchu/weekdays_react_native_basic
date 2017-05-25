import React from 'react';
import { Text } from 'react-native';

var DayItem = React.createClass({
  render: function () {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  },
  style: function () {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function () {
    var opacity = 1 / this.props.daysUntils;
    return 'rgba(0,0,0, ' + opacity + ')';
  },
  fontWeight: function () {
    var weight = 7 - this.props.daysUntils;
    return (weight * 100).toString();
  },
  fontSize: function () {
    return 60 - 6 * this.props.daysUntils;
  },
  lineHeight: function () {
    return 70 - 4 * this.props.daysUntils;
  }
});

export default DayItem;
