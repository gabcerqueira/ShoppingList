import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (email, password) => {
		alert(`email : ${email} \npassword : ${password}`);
	};

	return (
		<View>
			<Text style={styles.title}>Sign In</Text>
			<TextInput
				style={styles.input}
				value={email}
				placeholder="Email"
				autoCompleteType="email"
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				style={styles.input}
				value={password}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={(password) => setPassword(password)}
			/>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => handleSubmit(email, password)}
			>
				<Text style={styles.textBtn}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {
		paddingTop: 23,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		margin: 15,
	},

	input: {
		margin: 15,
		height: 40,
		borderColor: "#fc5c65",
		borderWidth: 1,
		padding: 10,
	},
	btn: {
		alignItems: "center",
		backgroundColor: "#fc5c65",
		padding: 10,
		margin: 15,
		height: 40,
	},
	textBtn: {
		color: "#fff",
	},
});
