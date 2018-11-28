import React from 'react';
import {
	StyleSheet,
	View,
	TouchableHighlight,
	Text
} from 'react-native';

export default class Calculator extends React.Component {

	render() {

		return (			
			<View style={styles.body}>
				<View style={styles.panelLabel}>
					<Text style={styles.labelResult}></Text>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>1</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>2</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>3</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>4</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>5</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>6</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>7</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>8</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>9</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>0</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>-</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>x</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>/</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.rowButton}>
					<View style={styles.colButton}>
						<TouchableHighlight style={styles.buttonInput}>
							<Text style={styles.buttonText}>AC</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.colButton}>
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