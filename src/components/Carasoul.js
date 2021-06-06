import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  View,
} from 'react-native';
import {styles} from '../screens/styles';

const width = Dimensions.get('window').width;

class Carasoul extends Component {
  constructor(props) {
    super(props);
    this.scrollX = new Animated.Value(0);
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.carasoul}>
        <Image style={styles.carasoulImg} source={item.source} />
      </View>
    );
  };
  render() {
    return (
      <View style={{margin: 10}}>
        <View style={styles.flatList}>
          <ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
              {useNativeDriver: false},
            )}
            pagingEnabled
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {this.props.carosoulData.map((item, index) => {
              return (
                <View style={styles.carasoul} key={index.toString()}>
                  <Image style={styles.carasoulImg} source={item.source} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {this.props.carosoulData.map((_, index) => {
            let backgroundColor = this.scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: ['#EEE', 'red', '#EEE'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index.toString()}
                style={[
                  styles.circleIndicator,
                  {
                    backgroundColor,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default Carasoul;
