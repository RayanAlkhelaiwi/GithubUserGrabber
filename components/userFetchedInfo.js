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
  Image,
  Linking,
  ActivityIndicator,
  Button,
  // Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class userFetchedInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.JSON_ListView_Clicked_Item,
      isLoading: true,
      jsonResponse: null,
    };
  }

  static navigationOptions = {
    title: 'userFetchedInfo',
  };

  componentDidMount() {
    const githubURL = 'https://api.github.com/users/' + this.state.username;
    return fetch(githubURL) // Option to use axios, since all are promise based
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          jsonResponse: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.body}>
          <ActivityIndicator />
        </View>
      );
    } else {
      if (this.state.jsonResponse.id) {
        return (
          <View style={styles.body}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{uri: this.state.jsonResponse.avatar_url}}
              />
              <View style={styles.row}>
                <Text style={styles.title}>Name: </Text>
                <Text style={styles.info}>
                  {this.state.jsonResponse.name
                    ? this.state.jsonResponse.name
                    : 'No name provided'}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Bio: </Text>
                <Text style={styles.info}>
                  {this.state.jsonResponse.bio
                    ? this.state.jsonResponse.bio
                    : 'No Biography'}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Number of repos: </Text>
                <Text style={styles.info}>
                  {this.state.jsonResponse.public_repos
                    ? this.state.jsonResponse.public_repos
                    : 'No repos yet'}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Last Update: </Text>
                <Text style={styles.info}>
                  {this.state.jsonResponse.updated_at
                    .slice(0, 10)
                    .replace(/[-]/g, '/') + ' @ ' + this.state.jsonResponse.updated_at.split("T")[1].slice(0, -1)}
                </Text>
              </View>
              <View style={styles.row}>
                <View style={styles.visitButtons}>
                  <Button
                    style={styles.button}
                    color="#7057ff"
                    title={'Visit ' + this.state.jsonResponse.name.split(" ")[0] + '\'s Website'}
                    onPress={() => Linking.openURL(this.state.jsonResponse.blog)}
                  />
                </View>
                <View style={styles.visitButtons}>
                  <Button
                    style={styles.button}
                    color="#7057ff"
                    title={'Visit ' + this.state.jsonResponse.name.split(" ")[0] + '\'s Profile'}
                    onPress={() =>
                      Linking.openURL(this.state.jsonResponse.html_url)
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.body}>
            <View style={styles.container}>
              <Image
                style={styles.image404}
                source={require('../assets/userNotFound.png')}
              />
              <Text style={styles.info}>
                Sorry, {this.state.jsonResponse.message}!
              </Text>
            </View>
          </View>
        );
      }
    }
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
    alignItems: 'center',
    margin: 24,
  },
  image: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 48,
  },
  image404: {
    borderColor: Colors.white,
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 48,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
  },
  info: {
    color: Colors.white,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 32,
  },
  visitButtons: {
    margin: 4,
  },
  row: {
    flexDirection: 'row',
  },
});
