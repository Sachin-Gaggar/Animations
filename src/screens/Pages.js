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
        <ScrollView
          ref={this.ParentScrollView}
          horizontal
          pagingEnabled
          scrollEnabled={false}>
          {pagesData.map((item, index) => (
            <Page
              key={index}
              index={index}
              maxLength={pagesData.length}
              parentScrollRef={this.ParentScrollView}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Pages;
