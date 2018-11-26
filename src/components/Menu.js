import React from "react";
import posed from "react-pose";
import styled, { css } from "react-emotion";

const Menu = props => {
	return <MenuContainer>ITF Interactions</MenuContainer>;
};

export default Menu;

const MenuContainer = styled("div")`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	background-color: #fff;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
`;
