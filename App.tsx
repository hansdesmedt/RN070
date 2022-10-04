import React from 'react';

import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {RadialGradient} from 'react-native-gradients';

const App = () => {
  const progress = useSharedValue<number>(0);

  // const config = useInterpolateConfig(
  //   [0, 2],
  //   ['#000000', '#FFFFFF'],
  //   ColorSpace.RGB,
  // );

  // progress.value = withRepeat(
  //   withTiming(0, {
  //     duration: 500,
  //     easing: Easing.out(Easing.exp),
  //   }),
  //   -1,
  //   true,
  // );

  // const backgroundStyle = useAnimatedStyle(() => {
  //   const color = interpolateColor(progress.value, [0, 1], ['red', 'blue']);

  //   console.log('backgroundColorInterpolation', color);

  //   return {
  //     backgroundColor: color,
  //   };
  // });

  const colorList = [
    {offset: '0%', color: '#231557', opacity: '1'},
    {offset: '29%', color: '#44107A', opacity: '1'},
    {offset: '67%', color: '#FF1361', opacity: '1'},
    {offset: '100%', color: '#FFF800', opacity: '1'},
  ];

  return (
    <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
  );
  // return <LinearGradient colorList={colorList} angle={90} />;
  // return <Animated.View style={[{flex: 1}, backgroundStyle]} />;
};

export default App;
