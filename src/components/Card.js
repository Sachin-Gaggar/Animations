import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  Animated
} from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Card = (props) => {
  return (
    <Animated.View style={[styles.box]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.src} />
      </View>
      <View style={styles.content}>
        <Text style={styles.bold}>{props.title}</Text>
        <Text style={styles.light}>{props.description}</Text>
      </View>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    height: (8.5 * height) / 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width,
    height,
    flex: 1,
    resizeMode: "contain"
  },
  content: {
    flex: 0.3
  },
  bold: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#2F485E",
    fontWeight: "bold"
  },
  light: {
    width: width / 1.2,
    textAlign: "center"
  }
});
