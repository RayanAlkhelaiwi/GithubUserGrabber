/***
 *
 * By: Rayan N. Alkhelaiwi
 * https://rayan.dev
 *
 * ***/

/* jshint esversion: 6 */
// To Enable ES6 ESLint and JSHint

//use 'esversion: 6'
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Alert,
  // ActivityIndicator,
  // Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
// Install react-native-linear-gradient: "https://www.npmjs.com/package/react-native-linear-gradient"

export default class userGrabber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  static navigationOptions = {
    title: 'userFetchedInfo',
  };

  passUsername = () => {
    if (this.state.username.length < 1) {
      Alert.alert('No Username Entered', 'You must enter a username');
    } else {
      this.props.navigation.navigate('userFetchedInfo', {
        JSON_ListView_Clicked_Item: this.state.username,
      });
    }
  };

  render() {
    // if (!this.state.isLookedUp) {}
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/github-logo.png')}
          />
          <Text style={styles.title}>GitHub User Grabber</Text>
          <Text style={styles.description}>
            Enter a GitHub username to lookup:
          </Text>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            style={styles.textInput}
            placeholder="e.g. RayanAlkhelaiwi"
            placeholderTextColor="#eff3f6"
          />
          <LinearGradient
            colors={
              //Original Gradient colors: #34d058 & #28a745 (From Github's New/Clone-or-download button)
              ['#34d058', '#28a745']
            }
            style={styles.linearGradient}>
            <Text style={styles.button} onPress={this.passUsername}>
              Lookup
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

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
    borderRadius: 5,
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
