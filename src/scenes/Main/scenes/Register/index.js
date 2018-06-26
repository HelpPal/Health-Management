import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable'
import * as session from 'MobileApp/src/services/session';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
	TouchableWithoutFeedback,
	StyleSheet,
	Image,
	Alert,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	InputGroup,
	Input,
	Button,
	Spinner,
	Icon,
	View,
} from 'native-base';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 150,
		bottom: 0,
		left: 0,
		right: 0,
	},
	content: {
		padding: 30,
		flex: 1,
	},
	shadow: {
		flex: 1,
		width: null,
		height: null,
	},
	input: {
		marginBottom: 20,
	},
	inputIcon: {
		width: 30,
	},
	button: {
		marginTop: 20,
		alignSelf: 'center',
		width: 150,
		backgroundColor: "#000000",
	},
	circleImage: {
    	height:100,
   	 	width: 100,
    	borderRadius: 50,
    	marginBottom: 30,
    	alignSelf: 'center',
  	},
});

class Register extends Component {
	static propTypes = {
		navigator: PropTypes.shape({
			getCurrentRoutes: PropTypes.func,
			jumpTo: PropTypes.func,
		}),
	}

	constructor(props) {
		super(props);

		this.initialState = {
			isLoading: false,
			error: false,
			error_msg: '',
			username: '',
			email: '',
			password: '',
		};
		this.state = this.initialState;
	}

	onPressRegister() {
		
		this.setState({
			isLoading: true,
			error: false,
			error_msg: '',
		});

		dismissKeyboard();
		const { username, email, password } = this.state;

		session.onRegister(username,email,password)
		.then(() => {
				
			this.setState({
				isLoading: false,
				error:this.props.error,
				error_msg: this.props.error_msg,
			});

			if (this.state.error === false)
			{
				const routeStack = this.props.navigator.getCurrentRoutes();
				this.props.navigator.jumpTo(routeStack[2]);
			}
			else
			{
				Alert.alert(
  				'Error',
  				this.props.error_msg,
  				[
    				{text: 'Ok', onPress: () => console.log('OK pressed')},
  				],
  				{ cancelable: false }
				)
			}
		});
	}

	onPressBack() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
	}

	render() {
		return (
			<Container>
				<View style={styles.container}>
				 	
				 	<Image source={{uri : 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/26907763_10215538589723754_2533411849771329667_n.jpg?_nc_cat=0&oh=35a75a1660b110bf62dfc7ca41cbbcf6&oe=5BBBC8CB'}} 
				 	style = {styles.circleImage}/>

					<TouchableWithoutFeedback
						onPress={dismissKeyboard}
					>
						<View
							style={styles.content}
						>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-person" />
								<Input
									placeholder="Username"
									autoCorrect={false}
									onChangeText={username => this.setState({ username })}
									value={this.state.username}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-mail" />
								<Input
									placeholder="Email"
									keyboardType="email-address"
									autoCorrect={false}
									autoCapitalize="none"
									onChangeText={email => this.setState({ email })}
									value={this.state.email}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-unlock" />
								<Input
									placeholder="Password"
									onChangeText={password => this.setState({ password })}
									value={this.state.password}
									secureTextEntry
								/>
							</InputGroup>
							{this.state.isLoading ? (
								<Spinner size="small" color="#000000" />
							) : (
								<Button
									style={styles.button}
									onPress={() => this.onPressRegister()}
								>
									Register
								</Button>
							)}
						</View>
					</TouchableWithoutFeedback>
				</View>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
    return {
    	error: state.services.session.error, 
    	error_msg: state.services.session.error_msg
    }
}

export default connect(mapStateToProps)(Register)




