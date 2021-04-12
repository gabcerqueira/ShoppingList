import React from "react";
import {
	BackgroundImage,
	Logo,
	LogoText,
	HomeButton,
	ButtonText,
} from "../components/home.styles";

const Home = ({ navigation }) => {
	return (
		<BackgroundImage
			resizeMode="cover"
			source={require("../assets/background.jpg")}
		>
			{console.log("vamo testar o log dessa parada")}
			<Logo source={require("../assets/logo-red.png")} />
			<LogoText>Helping you manage your groceries</LogoText>
			<HomeButton shop onPress={() => navigation.navigate("Shop")}>
				<ButtonText>SHOP</ButtonText>
			</HomeButton>
			<HomeButton signIn onPress={() => navigation.navigate("Sign In")}>
				<ButtonText>SIGN IN</ButtonText>
			</HomeButton>
			<HomeButton signUp onPress={() => navigation.navigate("Sign Up")}>
				<ButtonText>SIGN UP</ButtonText>
			</HomeButton>
		</BackgroundImage>
	);
};

/*
const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "#000",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	logo: {
		width: 80,
		height: 80,
		position: "absolute",
		top: 100,
		left: 170,
	},
	text: {
		position: "absolute",
		top: 190,
		left: 100,
	},
	loginButton: {
		width: "40%",
		height: 50,
		backgroundColor: "#fc5c65",
		marginBottom: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	registerButton: {
		width: "40%",
		height: 50,
		backgroundColor: "#4ecdc4",
		marginBottom: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		color: "#fff",
	},
});

*/
export default Home;
