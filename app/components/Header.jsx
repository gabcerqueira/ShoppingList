import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
const Header = ({ title }) => (
	<View style={styles.header}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

export default Header;

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fc5c65",
	},
	title: {
		fontSize: 26,
		color: "#fff",
	},
});
