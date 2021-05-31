export const translate = (index) => {
  const moveX = index.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-50, 0, 50]
  });
  return moveX;
};
export const animatedWidth = (index) => {
  const width = index.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2],
    outputRange: [30, 40, 30, 40, 30]
  });
  return width;
};
export const animatedRotation = (index) => {
  const rotate = index.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2],
    outputRange: ["0deg", "720deg", "0deg", "720deg", "0deg"]
  });
  return rotate;
};
export const animatedRadius = (index) => {
  const Radius = index.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2],
    outputRange: [15, 0, 15, 0, 15]
  });
  return Radius;
};
