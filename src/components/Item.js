import React, {Component} from 'react';
import {Animated, Image, Text, View} from 'react-native';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.border = new Animated.Value(0);
  }
  borderAnimation = () => {
    Animated.timing(this.border, {
      toValue: 3,
      timing: 2000,
      useNativeDriver: false,
    }).start();
    return this.border.interpolate({
      inputRange: [0, 2.99, 3],
      outputRange: [0, 0, 3],
    });
  };
  borderRemove = () => {
    Animated.timing(this.border, {
      toValue: 0,
      timing: 10,
      useNativeDriver: false,
    }).start();
    return this.border.interpolate({
      inputRange: [0, 2.99, 3],
      outputRange: [0, 0, 3],
    });
  };
  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: '#EEE',
          width: 90,
          heigth: 90,

          borderColor: 'red',
          borderLeftWidth: this.props.selected
            ? this.borderAnimation()
            : this.borderRemove(),
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <View>
          <Image
            style={{width: 80, height: 80, marginLeft: 5, resizeMode: 'center'}}
            source={this.props.source}
          />
        </View>
        <Text style={{textAlign: 'center'}}>{this.props.name}</Text>
      </Animated.View>
    );
  }
}

export default Item;
