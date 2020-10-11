import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Tabs, Tab } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import './Navbar.css';

interface INavbar {
	name: string;
	sections: string[];
	isExpanded: boolean;
	smallScreen: boolean;
	currentTab: number;
}

export default function Navbar (props: INavbar) {
	const name: string = props.name;
	const sections: string[] = props.sections;
	const [showDrawer, setShowDrawer] = useState(false);
	const [currentTab, setCurrentTab] = useState(0);
	const toggleDrawer = () => setShowDrawer(!showDrawer);
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return(
		<nav className="Navbar">
			<AppBar position="fixed">
				<Toolbar style={{justifyContent:'space-around'}}>
					<Typography variant="h6" className="name">
						{name}
					</Typography>
					<Tabs 
						style={smallScreen ? {display: 'none'} : {display: 'flex'}}
						value={currentTab}
						onChange={(_, val) => setCurrentTab(val)}
						aria-label="Navigation Tabs"
						centered
					>
						{sections.map(sec => <Tab label={sec} key={sec} style={{minWidth:'20px'}} />)}
					</Tabs>
					<Drawer anchor='left' open={showDrawer && smallScreen} onClose={toggleDrawer}>
						<Tabs 
							value={currentTab}
							onChange={(_, val) => setCurrentTab(val)}
							aria-label="Navigation Tabs"
							orientation="vertical"
						>
							{sections.map(sec => <Tab label={sec} key={sec} style={{minWidth:'20px'}} />)}
						</Tabs>
					</Drawer>
					{smallScreen ? 
					<IconButton 
						edge="start"
						color="inherit"
						aria-label="Menu"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>:<></>}
				</Toolbar>
			</AppBar>
		</nav>
	)
}
