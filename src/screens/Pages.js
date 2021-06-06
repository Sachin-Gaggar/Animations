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
          initialScrollIndex={this.props.selected}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          pagingEnabled
          data={pagesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <Page
              key={index}
              index={index}
              back={this.props.back}
              maxLength={pagesData.length}
              parentScrollRef={this.ParentScrollView}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    );
  }
}

export default Pages;
