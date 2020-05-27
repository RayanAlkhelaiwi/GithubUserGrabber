/* jshint esversion: 6 */
// To Enable ES6 ESLint and JSHint

//use 'esversion: 6'
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  // Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Install react-native-linear-gradient: "https://www.npmjs.com/package/react-native-linear-gradient"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLookedUp: false,
      isLoading: true,
      jsonResponse: null,
    };
  }

  componentDidMount() {
    const githubURL = 'https://api.github.com/users/rayanalkhelaiwi'; // TODO: Pass username
    return fetch(githubURL)
      .then(response => response.json())
      .then(json => {
        //
        this.setState({
          // isLookedUp: true,
          isLoading: false,
          jsonResponse: json,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

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
            <Text style={styles.button}>Lookup</Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.body}>
//           <ActivityIndicator />
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.body}>
//           <Image
//             style={styles.image}
//             source={{uri: this.state.jsonResponse.avatar_url}}
//           />
//           <Text style={styles.title}>{this.state.jsonResponse.name}</Text>
//           <Text style={styles.title}>{this.state.jsonResponse.bio}</Text>
//           <Text style={styles.title}>{this.state.jsonResponse.blog}</Text>
//           <Text style={styles.title}>{this.state.jsonResponse.public_repos}</Text>
//           <Text style={styles.title}>{this.state.jsonResponse.updated_at}</Text>
//           <Text style={styles.title}>{this.state.jsonResponse.html_url}</Text>
//         </View>
//       );
//     }
//   }

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
