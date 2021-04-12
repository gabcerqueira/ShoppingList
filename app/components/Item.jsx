import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Item = ({ item, deleteItem }) => (
	<TouchableOpacity
		onPress={() => console.log(`vc apertou ${item.title}`)}
		activeOpacity={0.3}
		style={styles.container}
	>
		<View style={styles.itemView}>
			<Text style={styles.itemText}>{item.title}</Text>
			<FontAwesome
				style={styles.icon}
				name="remove"
				size={20}
				color="firebrick"
				onPress={() => deleteItem(item.id)}
			/>
		</View>
	</TouchableOpacity>
);

export default Item;

const styles = StyleSheet.create({
	container: {
		height: 50,

		padding: 10,
		backgroundColor: "#f8f8f8",
		alignItems: "flex-start",
		borderBottomWidth: 1,
		borderColor: "#eee",
		borderRadius: 5,
	},
	itemView: {
		width: 380,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	icon: {
		marginRight: 15,
	},
	itemText: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
