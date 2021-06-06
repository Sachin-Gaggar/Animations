import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import Page from '../components/Page';
import {styles} from './styles';
import {pagesData} from '../constants/pagesNumber';
const width = Dimensions.get('window').width;
class Pages extends Component {
  constructor(props) {
    super(props);
  }
  ParentScrollView = React.createRef();
  componentDidMount() {}
  render() {
    return (
      <View style={styles.fullScreenFlex}>
        <FlatList
          ref={this.ParentScrollView}
          horizontal
          pagingEnabled
          data={pagesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <Page
              key={index}
              index={index}
              maxLength={pagesData.length}
              parentScrollRef={this.ParentScrollView}
            />
          )}
          scrollEnabled={false}></FlatList>
      </View>
    );
  }
}

export default Pages;
