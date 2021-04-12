import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
	View,
	StyleSheet,
	FlatList,
	TextInput,
	TouchableOpacity,
	Text,
	Modal,
	Button,
} from "react-native";
import Header from "../components/Header";
import Item from "../components/Item";
const ShoppingList = () => {
	const [items, setItems] = useState([
		{ id: 1, title: "Leite" },
		{ id: 2, title: "Maça" },
		{ id: 3, title: "Bolo" },
	]);
	const [item, setItem] = useState("");
	const [id, setId] = useState(4);
	const [modal, setModal] = useState(false);

	const addItem = (title) => {
		if (!title) return alert("falhou...");
		setId(id + 1);
		items.push({ id: id, title: title });
		setItems(items);
		setItem("");
	};

	const deleteItem = (id) => {
		setItems((items) => {
			return items.filter((item) => item.id !== id);
		});
	};

	return (
		<View style={styles.container}>
			<Header title="Shopping List" />
			<TouchableOpacity
				style={styles.btnModal}
				onPress={() => setModal(!modal)}
			>
				<Text style={styles.text}>Go to add item ! </Text>
			</TouchableOpacity>
			<Modal visible={modal} animationType="slide">
				<View style={styles.containerPage}>
					<TextInput
						style={styles.input}
						value={item}
						placeholder="add a item..."
						onChangeText={(item) => setItem(item)}
					/>
					<View style={styles.btnContainer}>
						<TouchableOpacity
							style={styles.btn}
							onPress={() => {
								addItem(item);
								setModal(!modal);
							}}
						>
							<FontAwesome
								name="plus"
								size={20}
								color="green"
								style={styles.btnPlus}
							/>
							<Text style={styles.textBtn}>ADD ITEM</Text>
						</TouchableOpacity>
						<FontAwesome
							style={styles.icon}
							name="remove"
							size={40}
							color="firebrick"
							onPress={() => setModal(!modal)}
						/>
					</View>
				</View>
			</Modal>
			<FlatList
				style={styles.list}
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Item key={item.id} item={item} deleteItem={deleteItem} />
				)}
			/>
		</View>
	);
};

export default ShoppingList;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	containerPage: {
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
	},
	btn: {
		height: 30,
		width: "50%",
		flexDirection: "row",
		backgroundColor: "#fc5c65",
		justifyContent: "center",
		margin: 10,
		opacity: 0.8,
		borderRadius: 5,
	},
	input: {
		height: 40,
		width: "60%",
		borderColor: "gray",
		borderWidth: 1,
		margin: 20,
		padding: 10,
	},
	list: {
		margin: 15,
	},
	textBtn: {
		color: "#fff",
		alignSelf: "center",
		padding: 10,
	},
	btnPlus: {
		alignSelf: "center",
	},
	btnModal: {
		margin: 20,
		backgroundColor: "#ef5622",
		width: "40%",
		height: "5%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
	text: {
		color: "#fff",
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
});
