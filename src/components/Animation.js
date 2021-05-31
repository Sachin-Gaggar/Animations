import React, { useState } from "react";

import {
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Animation = () => {
  const pan = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("Grant");
        console.log({ ...pan.x }, "BEfore Offset");

        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        console.log({ ...pan.x }, "After offset");
      },
      onPanResponderMove: (_, gesture) => {
        console.log({ ...pan.x }, "BEfore setValue");

        pan.x.setValue(gesture.dx);
        console.log({ ...pan.x }, "after setValue");

        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        console.log({ ...pan.x }, "BEfore flattenOffset");
        pan.flattenOffset();
        console.log({ ...pan.x }, "After flattenOffset");
      }
    })
  )[0];

  //   <Animated.View
  //   style={[styles.box, { opacity }]}
  //   key={index.toString()}
  // >
  //   <View style={styles.imageContainer}>
  //     <Image style={styles.image} source={item.src} />
  //   </View>
  //   <View style={styles.content}>
  //     <Text style={styles.bold}>{item.title}</Text>
  //     <Text style={styles.light}>{item.discription}</Text>
  //   </View>
  // </Animated.View>

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: "red"
          },
          {
            transform: [
              {
                translateX: pan.x
              },
              {
                translateY: pan.y
              }
            ]
          }
        ]}
        {...panResponder.panHandlers}
      ></Animated.View>
    </View>
  );
};

export default Animation;
