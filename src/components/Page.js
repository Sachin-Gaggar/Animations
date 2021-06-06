import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {carosoulData} from '../constants/carasoul';
import {styles} from '../screens/styles';
import Carasoul from './Carasoul';
import CustomInput from './CustomInput';

const width = Dimensions.get('window').width;
class Page extends Component {
  constructor(props) {
    super(props);
  }
  swipe = new Animated.Value(0);
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: this.swipe,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      if (this.swipe._value > 0) {
        console.log('backward');
        this.backwardSwipe();
      } else {
        console.log('forward');

        this.forwardSwipe();
      }
    },
  });
  backwardSwipe = () => {
    const {index, parentScrollRef} = this.props;

    if (index != 0) {
      const scrollTo = width * (index - 1);
      parentScrollRef.current.scrollTo({
        x: scrollTo,
        animated: true,
      });
    }
  };
  forwardSwipe = () => {
    const {index, maxLength, parentScrollRef} = this.props;
    if (index != maxLength - 1) {
      const scrollTo = width * (index + 1);
      parentScrollRef.current.scrollTo({
        x: scrollTo,
        animated: true,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.fullScreenFlex}>
        <Carasoul carosoulData={carosoulData} />
        <View {...this.panResponder.panHandlers} style={styles.fullScreenFlex}>
          <CustomInput />
          <CustomInput />
          <CustomInput />
          <CustomInput />
          <CustomInput />
        </View>
      </SafeAreaView>
    );
  }
}

export default Page;