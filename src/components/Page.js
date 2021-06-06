import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
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
        this.backwardSwipe();
      } else {
        this.forwardSwipe();
      }
    },
  });
  backwardSwipe = () => {
    const {index, parentScrollRef} = this.props;

    if (index != 0) {
      const scrollTo = index - 1;
      parentScrollRef.current.scrollToIndex({
        index: scrollTo,
        animated: true,
      });
    }
  };
  forwardSwipe = () => {
    const {index, maxLength, parentScrollRef} = this.props;
    if (index != maxLength - 1) {
      const scrollTo = index + 1;
      parentScrollRef.current.scrollToIndex({
        index: scrollTo,
        animated: true,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.fullScreenFlex}>
        <TouchableOpacity onPress={() => this.props.back()}>
          <Text style={{color: 'blue'}}>{'<'}Go Back</Text>
        </TouchableOpacity>
        <Carasoul carosoulData={carosoulData} />
        <View {...this.panResponder.panHandlers} style={styles.fullScreenFlex}>
          <View style={styles.heading}>
            <Text style={styles.headingTxt}>{this.props.index}</Text>
          </View>
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
