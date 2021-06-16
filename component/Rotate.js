import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Animated, Easing, View} from 'react-native';

class Roatae extends Component {
  state = {
    thumbnailOpacity: new Animated.Value(0),
    spinValue: new Animated.Value(0),
  };
  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.state.spinValue.setValue(0);

    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  };
  render() {
    const rotate = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const marginLeft = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    return (
      <View backgroundColor={'#ffffff'}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red',
          }}
          />
        <Animated.Image
          resizeMode="cover"
          key={this.props.key}
          style={{transform: [{rotate}]}}
          source={this.props.source}
        />
      </View>
    );
  }
}

Roatae.propTypes = {
  key: PropTypes.any,
  source: PropTypes.any,
  style: PropTypes.any,
  thumbnail: PropTypes.any,
  type: PropTypes.any,
};

export default Roatae;
