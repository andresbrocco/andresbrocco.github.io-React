import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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

const useStyles = makeStyles(theme => ({
	name: {
		cursor: "pointer",
		minWidth: "250px",
		[theme.breakpoints.up("lg")]: {
			paddingLeft: "1.5em",
		},
	},
	toolbar: {
		justifyContent: "space-around",
	},
	tabs: {
		margin: "auto",
	},
	tab: {
		minWidth: "20px",
	}
}));

export default function Navbar (props: INavbar) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [currentTab, setCurrentTab] = useState(0);
	const toggleDrawer = () => setShowDrawer(!showDrawer);
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
	const classes = useStyles();

	return(
		<>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5" className={classes.name}>
						<b>{props.name}</b>
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
							variant={smallScreen ? "scrollable" : "standard"}
							value={currentTab}
							onChange={(_, val) => setCurrentTab(val)}
							aria-label="Navigation Tabs"
							orientation={smallScreen ? "vertical" : "horizontal"}
							className={classes.tabs}
							centered
						>
							{props.sections.map(sec => <Tab label={sec} key={sec} className={classes.tab}/>)}
						</Tabs>
					</ConditionalWrapper>
					{smallScreen ? 
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
			<Toolbar />{/*necessary to avoid content behind the toolbar */}
		</>
	)
}
