import React from 'react';
import {
	StyleSheet,
	View,
	TouchableHighlight,
	Text
} from 'react-native';
import _ from 'lodash';

const initialStates = {
	operator: '',
	variable1: 0,
	variable2: ''
}

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialStates;

		this._handlePressNumber = this._handlePressNumber.bind(this);
		this._handlePressOperator = this._handlePressOperator.bind(this);
		this._handlePressResult = this._handlePressResult.bind(this);
		this._handlePressClear = this._handlePressClear.bind(this);
	}

	_handlePressNumber(value) {
		const operator = this.state.operator;
		if (operator) {
			const variable2 = this.state.variable2;			
			const assignValue = !variable2 ? value : variable2.toString() + value;
			
			this.setState({ variable2: assignValue });
		} else {
			const variable1 = this.state.variable1;				
			const assignValue = !variable1 ? value : variable1.toString() + value;

			this.setState({ variable1: assignValue });
		}
	}

	_handlePressOperator(operator) {
		const { variable2 } = this.state;
		if (variable2) {
			this.calculate();
		}
		this.setState({ operator });
	}

	_handlePressResult() {
		this.calculate();		
	}

	_handlePressClear() {
		this.setState(initialStates);
	}

	calculate() {
		const { variable1, variable2, operator } = this.state;		
		let result;

			switch (operator) {
				case '+':
					result = variable1 + Number(variable2);
				break;
				case '-':
					result = variable1 - Number(variable2);
				break;
				case '*':
					result = variable1 * Number(variable2);
				break;
				case '/':
					result = variable1 / Number(variable2);
				break;
				default:
					return;
			}
			this.setState({ variable1: result });
		
	}

	render() {
		const { variable1 } = this.state;		

		return (			
			<View style={styles.body}>
				<View style={styles.panelLabel}>
					<Text style={styles.labelResult}>{_.round(variable1, 2).toString()}</Text>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(1)}>
							<Text style={styles.buttonText}>1</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(2)}>
							<Text style={styles.buttonText}>2</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(3)}>
							<Text style={styles.buttonText}>3</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(4)}>
							<Text style={styles.buttonText}>4</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(5)}>
							<Text style={styles.buttonText}>5</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(6)}>
							<Text style={styles.buttonText}>6</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(7)}>
							<Text style={styles.buttonText}>7</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(8)}>
							<Text style={styles.buttonText}>8</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(9)}>
							<Text style={styles.buttonText}>9</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressNumber(0)}>
							<Text style={styles.buttonText}>0</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressOperator('+')}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressOperator('-')}>
							<Text style={styles.buttonText}>-</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressOperator('*')}>
							<Text style={styles.buttonText}>x</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressOperator('/')}>
							<Text style={styles.buttonText}>/</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressClear()}>
							<Text style={styles.buttonText}>AC</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput} onPress={() => this._handlePressResult()}>
							<Text style={styles.buttonText}>=</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>			
		)
	}
}

const styles = StyleSheet.create({	
	body: {
		backgroundColor: '#ecf0f1',
		height: 280,
		width: '100%',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 10,
		paddingRight: 10
	},
	labelResult: {
		borderWidth: 1,
		borderColor: '#CDCDCD',
		backgroundColor: '#FFFFFF',
		fontSize: 24,
		padding: 7,
		textAlign: 'right'
	},
	rowButton: {
		flex: 1,
		flexDirection: 'row',
		height: '33%',
		paddingTop: 10,
		paddingBottom: 10,		
	},
	colButton: {
		flex: 1,
		padding: 5
	},
	buttonInput: {
		backgroundColor: '#b2bec3',
		alignItems: 'center',
		justifyContent: 'center',
		height: 36
	},
	buttonText: {
		color: '#636e72',
		fontWeight: '400',
		fontSize: 16
	}
})