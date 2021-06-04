import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Item from './components/Item';
import {Items} from './constants';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedId: 1, previousSelectedId: 0};
  }
  selectedItemLine = new Animated.Value(1);
  onPress = (id) => {
    this.setState({previousSelectedId: this.state.selectedId});
    this.setState({selectedId: id});
    Animated.timing(this.selectedItemLine, {
      toValue: id,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  renderItem = ({item}) => {
    const isSelected = this.state.selectedId === item.id ? true : false;
    return (
      <TouchableOpacity onPress={() => this.onPress(item.id)}>
        <Item source={item.source} name={item.name} selected={isSelected} />
      </TouchableOpacity>
    );
  };
  render() {
    const {previousSelectedId, selectedId} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'white', height, width: 100}}>
            <FlatList
              data={Items}
              keyExtractor={(items) => items.id.toString()}
              renderItem={this.renderItem}
              pagingEnabled
            />
            <Animated.View
              style={{
                width: 3,
                height:
                  previousSelectedId < selectedId
                    ? this.selectedItemLine.interpolate({
                        inputRange: [
                          previousSelectedId,
                          previousSelectedId + 0.1,
                          selectedId - 0.1,
                          selectedId,
                        ],
                        outputRange: [0, 100, 100, 0],
                      })
                    : this.selectedItemLine.interpolate({
                        inputRange: [
                          selectedId,
                          selectedId + 0.1,
                          previousSelectedId - 0.1,
                          previousSelectedId,
                        ],
                        outputRange: [0, 100, 100, 0],
                      }),
                marginTop: 10,
                marginLeft: 5,
                backgroundColor: 'red',
                position: 'absolute',
                transform: [
                  {
                    translateY: this.selectedItemLine.interpolate({
                      inputRange: [1, 2],
                      outputRange: [0, 108],
                    }),
                  },
                ],
              }}
            />
          </View>
          <View></View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Screen2;
