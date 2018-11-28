import React, { useState } from 'react'
import styled from 'react-emotion'
import { useContents } from '../hooks'

const Menu = props => {
	const [menuOpenState, setMenuOpenState] = useState(false)
	const contents = useContents()

	return [
		<MenuContainer>
			<MenuContent>
				<MenuButton
					focus={menuOpenState}
					onClick={() => setMenuOpenState(!menuOpenState)}
				>
					{menuOpenState ? 'Close' : 'Menu'}
				</MenuButton>
				<div>ITF Interactions</div>
				<MenuAttribution>2018</MenuAttribution>
			</MenuContent>
		</MenuContainer>,
		<MenuLeft open={menuOpenState} onBlur={() => setMenuOpenState(false)}>
			<MenuLeftContent>
				<h2>Contents</h2>
				<ul>
					{Object.values(contents).map(k => (
						<li>
							<a href={`#${k}`} onClick={() => setMenuOpenState(false)}>
								{k}
							</a>
						</li>
					))}
				</ul>
			</MenuLeftContent>
		</MenuLeft>,
	]
}

export default Menu

const MenuContainer = styled('div')`
	position: fixed;
	user-select: none;
	font-family: Avenir, sans-serif;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-weight: 600;
	color: #555;
	top: 0;
	left: 0;
	width: calc(100% + 300px);
	height: 248px;
	transform: translateY(-200px) translateX(-150px);
	background-color: #fff;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	z-index: 12001;
`

const MenuContent = styled('div')`
	height: 48px;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px;
`

const MenuLeft = styled('div')`
	display: flex;
	user-select: none;
	font-family: Avenir, sans-serif;
	justify-content: flex-end;
	position: fixed;
	left: 0;
	top: 0;
	height: calc(100vh + 200px);
	width: 450px;
	transform: translateX(${({ open }) => (open ? '-150px' : '-450px')});
	box-shadow: 1px 0 5px rgba(0, 0, 0, 0.25);
	padding-top: 48px;
	padding0-bottom: 200px;
	color: #fff;
	background-color: #1d1d1d;
	z-index: 12000;
	transition: all ${({ open }) => (open ? '.2s' : '.15s')};
`
const MenuLeftContent = styled('div')`
	padding: 24px 8px;
	text-align: left;
	width: 300px;

	a {
		font-weight: 600;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		padding: 8px;
		width: 100%;
	}

	li:hover {
		background-color: #111111;
	}
`

const MenuButton = styled('button')`
	font-size: 16px;
	padding: 0;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;
	color: #028f70;
	filter: brightness(100%);
	transition: all 0.12s;
	&: hover {
		filter: brightness(110%);
		text-decoration: underline;
	}
`

const MenuAttribution = styled('div')`
	font-size: 16px;
`
