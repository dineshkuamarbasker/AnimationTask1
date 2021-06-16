import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, View, Animated, Easing} from 'react-native';

import Thumbnail from '../assets/images/userprofileplaceholder.png';
class AnimationView extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  } //animate method is call from componentDidMount
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.animate());
  }

  render() {
    const xVal = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, parseInt(this.props.xDeg)],
    });

    const yVal = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, parseInt(this.props.yDeg)],
    });
    const transform = [{translateY: xVal}, {translateX: yVal}];

    return (
      <View style={styles.container}>
        <Animated.View //returns Animated.View
          style={[
            {
              transform,
            },
          ]}>
          <Image source={Thumbnail} />
        </Animated.View>
      </View>
    );
  }
}

AnimationView.propTypes = {
  key: PropTypes.any,
  source: PropTypes.any,
  style: PropTypes.any,
  xDeg: PropTypes.any,
  yDeg: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
export default AnimationView;
