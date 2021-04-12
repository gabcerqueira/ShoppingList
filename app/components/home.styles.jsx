import styled, { css } from "styled-components/native";

const signInColor = css`
	background-color: #fc5c65;
`;
const signUpColor = css`
	background-color: #4ecdc4;
`;
const shopColor = css`
	background-color: #ef5622;
`;

const getButtonColor = ({ signIn, shop }) => {
	if (shop) {
		return shopColor;
	}

	return signIn ? signInColor : signUpColor;
};

export const BackgroundImage = styled.ImageBackground`
	flex: 1;
	align-items: center;
	justify-content: flex-end;
	background-color: #000;
`;

export const Logo = styled.Image`
	width: 80px;
	height: 80px;
	position: absolute;
	top: 100px;
	left: 170px;
`;

export const LogoText = styled.Text`
	position: absolute;
	top: 190px;
	left: 100px;
`;

export const HomeButton = styled.TouchableOpacity`
	width: 40%;
	height: 50px;
	margin-bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	${getButtonColor}
`;

export const ButtonText = styled.Text`
	color: #fff;
`;
