import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
	Dimensions,
	Alert,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Icon,
	Button,
	List,
	ListItem,
	Text,
	Spinner,
	View,
} from 'native-base';
import { connect } from 'react-redux';
import * as session from 'MobileApp/src/services/session';

var { width } = Dimensions.get('window');
var box_count = 7;
var box_width = (width - 20) / box_count;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	sectorContainer:{
  		height: 140, 
  		backgroundColor: "#00000000",
  		flex: 1,
	},

	parentTitle:{
  		fontSize: 14,
  		marginLeft:10,
  		marginTop: 20,
	},

	parentContainer:{
  		height: 40, 
  		backgroundColor: "#000000",
  		marginTop:10,
  		marginLeft:10,
  		marginRight:10,
  		flexDirection: 'row',
	},
	childContainer:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#ffffff",
  		width:box_width,
	},
	childContainerFull:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#ffffff",
  		width:box_width,
	},
	childContainerHealth:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#324ec6",
  		width:box_width,
	},
	childContainerFullHealth:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#324ec6",
  		width:box_width,
	},
	childContainerFinances:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#00a6e4",
  		width:box_width,
	},
	childContainerFullFinances:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#00a6e4",
  		width:box_width,
	},
	childContainerRelationships:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#91dae9",
  		width:box_width,
	},
	childContainerFullRelationships:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#91dae9",
  		width:box_width,
	},
	childContainerDevelopment:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#ff7a37",
  		width:box_width,
	},
	childContainerFullDevelopment:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#ff7a37",
  		width:box_width,
	},
	childContainerCareer:{
  		height: 40,
  		position: 'relative',
  		borderTopWidth: 2,
  		borderBottomWidth: 2,
  		borderLeftWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#f7002a",
  		width:box_width,
	},
	childContainerFullCareer:{
  		height: 40,
  		position: 'relative',
  		borderWidth: 2,
  		borderColor:"#000000",
  		backgroundColor: "#f7002a",
  		width:box_width,
	},
	circleButton: {
    	height:30,
   	 	width: 30,
   	 	marginTop:15,
   	 	marginRight:10,
    	borderRadius: 15,
    	backgroundColor: "#00b057",
    	...StyleSheet.absoluteFillObject,
    	alignSelf: 'flex-end',
    	position: 'relative',
  	},
});

class Users extends Component {
	
	static propTypes = {
		navigator: PropTypes.shape({
			getCurrentRoutes: PropTypes.func,
			jumpTo: PropTypes.func,
		}),
	}

	renderPiece(titleText,vaildNumber){

    	if (vaildNumber == 0) {
    	return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);	 		
		}

		if (titleText === 'Health') {
		
			if (vaildNumber == 1) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 2) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 3) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 4) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 5) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 6) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 7) {
	 		return (
	 			<View style = {styles.parentContainer}>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerHealth}/>
				<View style = {styles.childContainerFullHealth}/>
				</View>
			);
			}
		}

		if (titleText === 'Finances') {

			if (vaildNumber == 1) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 2) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 3) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 4) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 5) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 6) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFull}/>
				</View>
			);
			}
			if (vaildNumber == 7) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFinances}/>
				<View style = {styles.childContainerFullFinances}/>
				</View>
			);
			}
		}

		if (titleText === 'Relationships') {

			if (vaildNumber == 1) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 2) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 3) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 4) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 5) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 6) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 7) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerRelationships}/>
				<View style = {styles.childContainerFullRelationships}/>
			</View>
			);
			}
		}

		if (titleText === 'Development') {

			if (vaildNumber == 1) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 2) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 3) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 4) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 5) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 6) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 7) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerDevelopment}/>
				<View style = {styles.childContainerFullDevelopment}/>
			</View>
			);
			}
		}

		if (titleText === 'Career') {

			if (vaildNumber == 1) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 2) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 3) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 4) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 5) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 6) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerFull}/>
			</View>
			);
			}
			if (vaildNumber == 7) {
	 		return (
				<View style = {styles.parentContainer}>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerCareer}/>
				<View style = {styles.childContainerFullCareer}/>
			</View>
			);
			}
		}	
	}

	renderSector(titleText, vaildNumber){
		return (
		<View style = {styles.sectorContainer}>
			<Text style={styles.parentTitle}>{titleText}</Text>
	 			{this.renderPiece(titleText,vaildNumber)}
				<Button style={styles.circleButton}	onPress={() => {

					if (titleText === 'Health') {
						if (this.initialState.nHealth > 6) {
							this.initialState.nHealth = 0
						}
						else
						{
							this.initialState.nHealth =  this.initialState.nHealth + 1;
						}
					}
					if (titleText === 'Finances') {
						if (this.initialState.nFinances > 6) {
							this.initialState.nFinances = 0;
						}
						else {
							this.initialState.nFinances =  this.initialState.nFinances + 1;
						}
					}
					if (titleText === 'Relationships') {
						if (this.initialState.nRelationships > 6) {
							this.initialState.nRelationships = 0;
						}
						else
						{
							this.initialState.nRelationships =  this.initialState.nRelationships + 1;
						}
					}
					if (titleText === 'Development') {
						if (this.initialState.nDevelopment > 6) {
							this.initialState.nDevelopment = 0;
						}
						else
						{
							this.initialState.nDevelopment =  this.initialState.nDevelopment + 1;
						}
					}
					if (titleText === 'Career') {
						if (this.initialState.nCareer > 6) {
							this.initialState.nCareer = 0;
						}
						else
						{
							this.initialState.nCareer =  this.initialState.nCareer + 1;
						}
					}

					this.setState(this.initialState);
				}}
				><Text></Text></Button>
		</View>
		);
	}

	constructor(props) {
		super(props);

		this.initialState = {
			uid:'',
			nHealth:7,
			nFinances: 7,
			nRelationships:7,
			nDevelopment:7,
			nCareer:7,
			error:false,
			error_msg: '',
			username:'',
		};
		this.state = this.initialState;
	}

	componentWillReceiveProps(nextProps) {
  
		this.initialState.uid = nextProps.uid;
		this.initialState.nHealth = nextProps.nHealth;
		this.initialState.nFinances = nextProps.nFinances;
		this.initialState.nRelationships = nextProps.nRelationships;
		this.initialState.nDevelopment = nextProps.nDevelopment;
		this.initialState.nCareer = nextProps.nCareer;
		this.initialState.username = nextProps.username;

		this.setState(this.initialState);
  	}

	onPressLogout() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
	}

	onPressUpdate() {
		
		this.setState({
			isLoading: true,
			error:false,
			error_msg: '',
		});

		session.onUpdate(this.state.uid,this.state.nHealth,this.state.nFinances,this.state.nRelationships,this.state.nDevelopment,this.state.nCareer)
		.then(() => {
				
			this.setState({
				isLoading: false,
				error:this.props.error,
				error_msg: this.props.error_msg,
			});

			Alert.alert(
  				'Result',
  				this.props.error_msg,
  				[
    				{text: 'Ok', onPress: () => console.log('OK pressed')},
  				],
  				{ cancelable: false }
			)
		});
	}
	
	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Header>
						<Button
							onPress={() => this.onPressLogout()}
							transparent
						>
						<Icon name="ios-power" />
						</Button>
						<Button
							onPress={() => this.onPressUpdate()}
							transparent
						>
						<Icon name="ios-cloud-upload-outline" />
						</Button>
						<Title>{this.state.username}</Title>
					</Header>
					<Content>

						{this.renderSector('Health',this.state.nHealth)}
						{this.renderSector('Finances',this.state.nFinances)}
						{this.renderSector('Relationships',this.state.nRelationships)}
						{this.renderSector('Development',this.state.nDevelopment)}
						{this.renderSector('Career',this.state.nCareer)}
	
					</Content>
				</View>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
    return {
    	error: state.services.session.error, 
    	error_msg: state.services.session.error_msg,
    	uid: state.services.session.uid,
    	nHealth: state.services.session.nHealth,
    	nFinances: state.services.session.nFinances,
    	nRelationships: state.services.session.nRelationships,
    	nDevelopment: state.services.session.nDevelopment,
    	nCareer: state.services.session.nCareer,
    	username: state.services.session.name
    }
}

export default connect(mapStateToProps)(Users)
