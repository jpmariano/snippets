import React from 'react';
import { AppRegistry, View } from 'react-vr';
import App from './src/App';

export default class spaceman extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('spaceman', () => spaceman);
