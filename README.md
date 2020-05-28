# Github User Grabber - React Native

React Native app that fetches users' profile info, via their user handler, from GitHub API

Covers:

* Multiscreens using [react-navigation](https://www.npmjs.com/package/react-navigation "react-navigation")
* Third Party module for better UI using [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient "react-native-linear-gradient")
* State Management using this/super(props) - w/ Option to use Redux
* Integrate 3rd Party API (GitHub's) using fetch() - w/ Option to use axios (Since both are promise-based)

## Project Structure

```sh
  ├── README.md
  ├── index.js ** First file to execute by React Native
  └── components
    ├── App.js ** Main file with StackNavigator multiscreen navigation
    ├── userGrabber.js ** Initial activity to enter a Github user to lookup
    └── userFetchedInfo.js ** Results activity with fetched info about the user
```

Initial Activity  |  Fetch Lookup Results  |  Form Validation  |  Error Handling
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![GithubUserGrabber-ReactNative](assets/userGrabberActivity.png)  |  ![GithubUserGrabber-ReactNative](assets/userFetchedInfoActivity.png)  |  ![GithubUserGrabber-ReactNative](assets/FormValidation.png)  |  ![GithubUserGrabber-ReactNative](assets/NoFoundHandler.png)
