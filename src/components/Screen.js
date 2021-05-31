/*
Commented code is without fade in and fade out 
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import Paginators from "./Paginators";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Data = [
  {
    src: require("../assets/exercise.png"),
    title: "FITNESS",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    src: require("../assets/powerlifting.png"),
    title: "POWERLIFTING",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    src: require("../assets/yoga.png"),
    title: "YOGA",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];
export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      currentIndex: 0,
    };
  }
  onViewableItemsChanged = ({ viewableItems }) => {
    this.setState({
      currentIndex: viewableItems[0].index,
    });
  };
  componentDidMount() {}
  renderItem = ({ item }) => (
    <View style={styles.box}>
      <Image style={styles.image} source={item.src} />
      <View style={styles.content}>
        <Text style={styles.bold}>{item.title}</Text>
        <Text style={styles.light}>{item.discription}</Text>
      </View>
    </View>
  );
  render() {
    const { scrollX } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={40}
            onViewableItemsChanged={this.onViewableItemsChanged}
          >
            {Data.map((item, index) => {
              const opacity = scrollX.interpolate({
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  style={[styles.box, { opacity }]}
                  key={index.toString()}
                >
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.src} />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.bold}>{item.title}</Text>
                    <Text style={styles.light}>{item.discription}</Text>
                  </View>
                </Animated.View>
              );
            })}
          </ScrollView>
        </View>
        <Paginators data={Data} scrollX={scrollX} width={width} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  box: {
    width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
  },
  image: {
    width,
    height,
    flex: 0.7,
    resizeMode: "contain",
  },
  content: {
    flex: 0.3,
  },
  bold: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#2F485E",
    fontWeight: "bold",
  },
  light: {
    textAlign: "center",
  },
});
*/

import React, { Component } from "react";
import {
  translate,
  animatedWidth,
  animatedRotation,
  animatedRadius
} from "../utill/AnimationFunctions";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  PanResponder
} from "react-native";
import Card from "./Card";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Data = [
  {
    src: require("../assets/exercise.png"),
    title: "FITNESS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    src: require("../assets/powerlifting.png"),
    title: "POWERLIFTING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    src: require("../assets/yoga.png"),
    title: "YOGA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  }
];

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity0: new Animated.Value(1),
      opacity1: new Animated.Value(0),
      opacity2: new Animated.Value(0)
    };
  }
  index = new Animated.Value(0);
  swipe = new Animated.Value(0);
  scrollX = new Animated.Value(0);
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: this.swipe
        }
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      if (this.swipe._value > 0) {
        this.backwardSwipe();
      } else {
        this.forwardSwipe();
      }
    }
  });
  forwardSwipe = () => {
    items = this.state;
    Object.values(items).forEach((opacity, index) => {
      if (index == 2) {
        //stop swiping at last page
      } else if (opacity._value == 1) {
        Animated.timing(this.index, {
          toValue: index + 1,
          duration: 1000,
          useNativeDriver: false
        }).start();
        Animated.timing(this.state[`opacity${index}`], {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }).start();
        Animated.timing(this.state[`opacity${index + 1}`], {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }).start();
      }
    });
  };
  backwardSwipe = () => {
    items = this.state;

    Object.values(items).forEach((opacity, index) => {
      // this.setState({ index });

      if (index == 0) {
        //Stop swiping at first page
      } else if (opacity._value == 1) {
        Animated.timing(this.index, {
          toValue: index - 1,
          duration: 1000,
          useNativeDriver: false
        }).start();

        Animated.timing(this.state[`opacity${index}`], {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }).start();

        Animated.timing(this.state[`opacity${index - 1}`], {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }).start();
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <Animated.View style={{ flex: 1 }} {...this.panResponder.panHandlers}>
            <Animated.View
              style={{
                position: "absolute",
                opacity: this.state.opacity0
              }}
            >
              <Card
                src={Data[0].src}
                title={Data[0].title}
                description={Data[0].description}
              />
            </Animated.View>
            <Animated.View
              style={{
                flex: 1,
                position: "absolute",
                opacity: this.state.opacity1
              }}
            >
              <Card
                src={Data[1].src}
                title={Data[1].title}
                description={Data[1].description}
              />
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                opacity: this.state.opacity2,
                flex: 1
              }}
            >
              <Card
                src={Data[2].src}
                title={Data[2].title}
                description={Data[2].description}
              />
            </Animated.View>
            <View></View>
          </Animated.View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 0.1,

            justifyContent: "center"
          }}
        >
          {Data.map((item, index) => {
            let opacity = this.index;

            return <View key={index} style={styles.circle} />;
          })}

          <Animated.View
            style={[
              {
                width: animatedWidth(this.index),
                margin: 4,
                position: "absolute",
                height: animatedWidth(this.index),
                borderRadius: animatedRadius(this.index),
                borderWidth: 1,
                backgroundColor: "#2F485E",
                borderColor: "#2F485E",
                transform: [
                  {
                    translateX: translate(this.index)
                  },
                  {
                    rotate: animatedRotation(this.index)
                  }
                ]
              }
            ]}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Screen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1
  },
  circle: {
    width: 30,
    marginHorizontal: 10,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,

    borderColor: "#2F485E"
  }
});
