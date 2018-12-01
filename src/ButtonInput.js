import React from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	TouchableHighlight,
	Text
} from 'react-native'

const ButtonInput = (props) => (	
	<TouchableHighlight style={[styles.buttonInput, {backgroundColor: props.backgroundColor}]} {...props}>
		<Text style={[styles.buttonText, {color: props.textColor}]}>{props.text}</Text>
	</TouchableHighlight>	
)
export default ButtonInput;

ButtonInput.propTypes = {
	text: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string
}
ButtonInput.defaultProps = {
	backgroundColor: '#b2bec3',
	textColor: '#636e72'
}

const styles = StyleSheet.create({
	buttonInput: {
		backgroundColor: '#b2bec3',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 8,
		paddingBottom: 8
	},
	buttonText: {
		color: '#636e72',
		fontWeight: '400',
		fontSize: 16
	}
})


