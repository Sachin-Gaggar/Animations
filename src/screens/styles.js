import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  fullScreenFlex: {
    flex: 1,
    width,
  },
  flatlist: {
    height: 200,
  },
  carasoul: {
    height: 200,
    width,
    alignItems: 'center',
  },
  carasoulImg: {
    width: 200,
    height: 200,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  circleIndicator: {
    width: 24,
    height: 24,
    margin: 5,
    borderRadius: 12,
  },
  inputContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#EEE',
    borderRadius: 20,
  },
  heading: {
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: 20,
    margin: 10,
  },
  grid: {
    width: width / 2 - 10,
    borderWidth: 1,
    margin: 5,
  },
  previewImg: {
    width: width / 2 - 12,
    height: 200,
  },
});
