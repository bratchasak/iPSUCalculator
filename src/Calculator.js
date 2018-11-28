import React from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import _ from 'lodash';
import ButtonInput from './ButtonInput';

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
		this.setState({ variable1: result, variable2: '' });		
	}

	render() {
		const { variable1, variable2 } = this.state;
		let textResult;

		if (variable2) {
			textResult = variable2;
		} else {
			textResult = variable1;
		}

		return (			
			<View style={styles.body}>
				<View style={styles.panelLabel}>
					<Text style={styles.labelResult}>{_.round(textResult, 2).toString()}</Text>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<ButtonInput text="1" onPress={() => this._handlePressNumber(1)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="2" onPress={() => this._handlePressNumber(2)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="3" onPress={() => this._handlePressNumber(3)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="4" onPress={() => this._handlePressNumber(4)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="5" onPress={() => this._handlePressNumber(5)} />
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<ButtonInput text="6" onPress={() => this._handlePressNumber(6)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="7" onPress={() => this._handlePressNumber(7)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="8" onPress={() => this._handlePressNumber(8)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="9" onPress={() => this._handlePressNumber(9)} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="0" onPress={() => this._handlePressNumber(0)} />
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<ButtonInput text="+" onPress={() => this._handlePressOperator("+")} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="-" onPress={() => this._handlePressOperator("-")} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="x" onPress={() => this._handlePressOperator("*")} />
					</View>
					<View style={styles.colButton}>
						<ButtonInput text="/" onPress={() => this._handlePressOperator("/")} />
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>						
						<ButtonInput text="AC" onPress={() => this._handlePressClear()} backgroundColor="#f39c12" textColor="#ffffff" />
					</View>
					<View style={styles.colButton}>						
						<ButtonInput text="=" onPress={() => this._handlePressResult()} />
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
	}	
})