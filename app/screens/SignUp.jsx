import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	const handleSubmit = (email, password, passwordConfirmation) => {
		if (password !== passwordConfirmation)
			return alert("Password dont match...");
		alert(`email : ${email}`, `password : ${password}`);
	};

	return (
		<View>
			<Text style={styles.title}>Sign Up</Text>
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
			<TextInput
				style={styles.input}
				value={passwordConfirmation}
				placeholder="Confirm Password"
				secureTextEntry={true}
				onChangeText={(passwordConfirmation) =>
					setPasswordConfirmation(passwordConfirmation)
				}
			/>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => handleSubmit(email, password, passwordConfirmation)}
			>
				<Text style={styles.textBtn}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignUp;

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
		borderColor: "#4ecdc4",
		borderWidth: 1,
		padding: 10,
	},
	btn: {
		alignItems: "center",
		backgroundColor: "#4ecdc4",
		padding: 10,
		margin: 15,
		height: 40,
	},
	textBtn: {
		color: "#fff",
	},
});
