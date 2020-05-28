/***
 *
 * By: Rayan N. Alkhelaiwi
 * https://rayan.dev
 *
 * ***/

/* jshint esversion: 6 */
// To Enable ES6 ESLint and JSHint

//use 'esversion: 6'
// import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import userGrabber from './userGrabber';
import userFetchedInfo from './userFetchedInfo';

const AppStackNavigator = createStackNavigator(
  {
    userGrabber: {
      screen: userGrabber,
      navigationOptions: {
        header: null,
      },
    },
    userFetchedInfo: {
      screen: userFetchedInfo,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'userGrabber',
  },
);

export default createAppContainer(AppStackNavigator);
