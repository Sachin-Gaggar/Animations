import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
export default class Paginators extends React.Component {
  render() {
    const { data, scrollX } = this.props;

    return (
      <View style={styles.indicator}>
        {data.map((_, index) => {
          const animatedColor = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: ["#FFFFFF", "#2F485E", "#FFFFFF"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[styles.dot, { backgroundColor: animatedColor }]}
              key={index.toString()}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: "#2F485E",
    borderWidth: 1,
    marginHorizontal: 8,
  },
});
