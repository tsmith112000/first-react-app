import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function App() {
	return (
	<View Style={styles}>
		<Text> This is a statement </Text>
		<Image
			source={require('./Pacman.png')}
			style=
			{{
				width: 40,
				height: 40,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		/>
	</View>
	);
}


