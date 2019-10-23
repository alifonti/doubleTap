import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import screens here
import HomeScreen from './src/screens/Home.js';
import GameSetupScreen from './src/screens/GameSetup.js';
import ScoreboardScreen from './src/screens/Scoreboard.js';
import ReadyUpScreen from './src/screens/ReadyUp.js';
import FinalResultsScreen from './src/screens/FinalResults.js';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        GameSetup: GameSetupScreen,
        Scoreboard: ScoreboardScreen,
        ReadyUp: ReadyUpScreen,
        FinalResults: FinalResultsScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(RootStack);

class Router extends Component {
    render() {
    return (
        <AppContainer />
    );
    }
}

export default Router;