import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	Test = "Hi,"
	return (
		<ScrollView>
		<Text>Some text</Text>
		<View>
			<Text>Some more text</Text>
				<Image
					source={{
					uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
					}}
					style={{ width: 200, height: 200 }}
				/>
			</View>
			
			<TextInput
				style={{
					height: 50,
					width: 100,
					
					borderColor: 'gray',
					borderWidth: 1
				}}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
