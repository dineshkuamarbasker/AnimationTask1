/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import AnimatedImages from './component/AnimationView';
// import Rotate from './component/Rotate.js';
import Thumbnail from './assets/images/userprofileplaceholder.png';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Roatae from './component/Rotate.js';

const App: () => Node = () => {
  const [type, setType] = React.useState('Left');

  const [xVal, setXval] = React.useState('0');

  const [yVal, setYval] = React.useState('300');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}></View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={setXval}
            value={xVal}
            placeholder="XAxis"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setYval}
            value={yVal}
            placeholder="YAxis"
            keyboardType="numeric"
          />
          <ModalDropdown
            options={['Left', 'Right']}
            defaultValue="Left"
            onSelect={(index, value) => {
              if (value == 'Left') {
                setXval('0');
                setYval('300');
              } else {
                setXval('300');
                setYval('0');
              }
            }}
          />
        </View>

        <View style={styles.container}>
          <AnimatedImages xDeg={xVal} yDeg={yVal} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    width: 300,
    height: 300,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
