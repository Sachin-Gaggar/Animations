import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from '../screens/styles';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

export default CustomInput;
