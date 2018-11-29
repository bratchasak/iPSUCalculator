import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight
} from 'react-native';

export default class Calculator extends React.Component {
	render() {
		return (
			<View style={styles.body}>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.labelResult}>0</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>1</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>2</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>3</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>4</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>5</Text>
						</TouchableHighlight>
					</View>
				</View>	
				<View style={styles.row}>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>6</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>7</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>8</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>9</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>0</Text>
						</TouchableHighlight>
					</View>
				</View>	
				<View style={styles.row}>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>-</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>x</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>/</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>5</Text>
						</TouchableHighlight>
					</View>
				</View>	
				<View style={styles.row}>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>AC</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.col}>
						<TouchableHighlight style={styles.buttonInput}>
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
		backgroundColor: '#dfe6e9',
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
	row: {
		flexDirection: 'row'
	},
	col: {
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