import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Tabs, Tab } from '@material-ui/core';
import { Section } from './Section';
import './Navbar.css';

const style = {
	flexGrow: 1
}

interface INavbarProps {
	name: string;
	sections: string[];
}

interface INavbarStates {
	isExpanded: boolean;
	currentTab: number;
}

export default class Navbar extends Component<INavbarProps, INavbarStates> {
	constructor(props: INavbarProps) {
		super(props);
		this.state = {
			isExpanded : false,
			currentTab : 0
		}
	};
	toggleScreenSize() {
		this.setState({isExpanded: (!this.state.isExpanded)})
	};
	render() {
		return(
			<div>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h6" style={style}>
							{this.props.name}
						</Typography>
						<Tabs value={this.state.currentTab} onChange={(_, val) => this.setState({currentTab: val})} aria-label="Navigation Tabs">
							{this.props.sections.map(sec => <Tab label={sec} key={sec} />)}
						</Tabs>
						<IconButton edge="start" color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
	)}
}
