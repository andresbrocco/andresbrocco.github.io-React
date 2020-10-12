import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css';

interface INavbar {
	name: string;
	sections: string[];
	isExpanded: boolean;
	smallScreen: boolean;
	currentTab: number;
}

interface IConditionalWrapper {
	condition: boolean;
	ifTrueWrapper(children: JSX.Element): JSX.Element;
	ifFalseWrapper(children: JSX.Element): JSX.Element;
	children: JSX.Element;
}

const ConditionalWrapper = (props: IConditionalWrapper): JSX.Element => 
  props.condition ?
		props.ifTrueWrapper(props.children) : 
		props.ifFalseWrapper(props.children);

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

					<ConditionalWrapper
						condition={smallScreen}
						ifTrueWrapper={children => 
							<Drawer 
								anchor='left'
								open={showDrawer}
								onClose={toggleDrawer}
							>
								{children}
							</Drawer>
						}
						ifFalseWrapper={children => children}
					>
						<Tabs 
							value={currentTab}
							onChange={(_, val) => setCurrentTab(val)}
							aria-label="Navigation Tabs"
							orientation={smallScreen ? "vertical" : "horizontal"}
							centered
						>
							{sections.map(sec => <Tab label={sec} key={sec} style={{minWidth:'20px'}} />)}
						</Tabs>
					</ConditionalWrapper>

					{
						smallScreen ? 
							<IconButton 
								edge="start"
								color="inherit"
								aria-label="Menu"
								onClick={toggleDrawer}
							>
								<MenuIcon />
							</IconButton>
						:
							<IconButton 
								edge="start"
								color="inherit"
								aria-label="Search"
							>
								<SearchIcon />
							</IconButton>
					}
				</Toolbar>
			</AppBar>
		</nav>
	)
}
