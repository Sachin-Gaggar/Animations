import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {pagesData} from '../constants/pagesNumber';
import Pages from './Pages';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {page: false, index: 0};
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.grid}
        onPress={() => this.setState({page: true, index})}>
        <Image style={styles.previewImg} source={item.source} />
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Item number {index}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.state.page) {
      return (
        <Pages
          selected={this.state.index}
          back={() => this.setState({page: false})}
        />
      );
    } else {
      return (
        <SafeAreaView style={styles.fullScreenFlex}>
          <FlatList
            pagingEnabled
            numColumns={2}
            data={pagesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderItem}
          />
        </SafeAreaView>
      );
    }
  }
}

export default Grid;
