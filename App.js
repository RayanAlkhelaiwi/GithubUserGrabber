/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Install react-native-linear-gradient: "https://www.npmjs.com/package/react-native-linear-gradient"

const App: () => React$Node = () => {

  // function constructor() {
  //   this.state = {
  //     username,
  //   };
  //   this.handleChangeUsername = this.handleChangeUsername.bind(this);
  // }

  // function handleChangeUsername(username) {
  //   this.setState({
  //     value: username,
  //   });
  // }

  function onPressButton(username) {
    const githubURL = 'https://api.github.com/users';
    return fetch(githubURL)
      .then(response => response.json())
      .then(json => {
        return json.users;
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleKeyPress(e) {
    if (e.nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
      onPressButton();
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/github-logo.png')}
        />
        <Text style={styles.title}>GitHub User Grabber</Text>
        <Text style={styles.description}>
          Enter a GitHub username to lookup:
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter username..."
          placeholderTextColor="#eff3f6"
          onKeyPresss={handleKeyPress}
          // defaultValue={this.state.username}
          // onChangeText={this.handleChangeUsername}
        />
        <LinearGradient
          colors = {
            ['#34d058', '#28a745'] //Original Gradient colors: #34d058 & #28a745 (From Github's New/Clone-or-download button)
          }
          style={styles.linearGradient}>
          <Text style={styles.button}>Lookup</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.black,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    margin: 24,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 48,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 32,
  },
  description: {
    color: Colors.white,
    marginTop: 8,
    fontWeight: '400',
  },
  textInput: {
    color: Colors.white,
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  button: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

export default App;
