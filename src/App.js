/* global XMLHttpRequest */

import React, { Component } from 'react';
import {
	StyleSheet,
	Navigator,
	View,
} from 'react-native';
import { Provider } from 'react-redux';
import immutableTransform from 'redux-persist-transform-immutable'
import store from 'MobileApp/src/store';
import * as routeHistoryActions from 'MobileApp/src/services/routeHistory/actions';
import Splash from 'MobileApp/src/scenes/Splash';
import Login from 'MobileApp/src/scenes/Main/scenes/Login';
import Register from 'MobileApp/src/scenes/Main/scenes/Register';
import Users from 'MobileApp/src/scenes/Main/scenes/Users';

// This is used in order to see requests on the Chrome DevTools
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

const transition = Navigator.SceneConfigs.HorizontalSwipeJump;
transition.gestures = null;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
});

const routeStack = [
	{ name: 'Login', component: Login },
	{ name: 'Register', component: Register },
	{ name: 'Users', component: Users },
];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialRoute: null,
		};
	}

	componentDidMount() {
		this.setState({ initialRoute: routeStack[0] });
	}

	renderContent() {
		if (!this.state.initialRoute) {
			return <Splash />;
		}

		return (
			<Navigator
				initialRoute={this.state.initialRoute}
				initialRouteStack={routeStack}
				configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
				onWillFocus={route => store.dispatch(routeHistoryActions.push(route))}
				renderScene={(route, navigator) =>
					<route.component route={route} navigator={navigator} {...route.passProps} />
				}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Provider store={store}>
					{this.renderContent()}
				</Provider>
			</View>
		);
	}
}

export default App;
