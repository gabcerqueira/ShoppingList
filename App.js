import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// <-- Screens -->
import Home from "./app/screens/Home";
import ShoppingList from "./app/screens/ShoppingList";
import SignUp from "./app/screens/SignUp";
import SignIn from "./app/screens/SignIn";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="Shop" component={ShoppingList} />
				<Stack.Screen name="Sign Up" component={SignUp} />
				<Stack.Screen name="Sign In" component={SignIn} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
