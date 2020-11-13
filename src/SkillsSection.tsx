import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import './SkillsSection.css'
import { Color, Grow, LinearProgress, List, ListItem, ListItemIcon, Paper, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles(theme => ({
	paper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "0.5em",
		padding: "0.5em"
	},
	progress: {
		width: "200px"
	}
}));

interface ISkillItem {
	name: string;
	percentage: number;
	color: string;
};

function SkillItem(props: ISkillItem): JSX.Element {
	const classes = useStyles();

	return(
		<ListItem >
			<ListItemIcon>
				<Paper elevation={2} className={classes.paper} style={{backgroundColor: props.color}}>
					{props.name}
				</Paper>
			</ListItemIcon>
			<LinearProgress variant="determinate" value={props.percentage} className={classes.progress} />
		</ListItem>
	)
};

export default function SkillsSection () {
	const classes = useStyles();
	const colors: string[] = ["green", "blue", "red"];

	return (
		<List>
			<h2>
				Skills
			</h2>
			<SkillItem name="React.js" percentage={50} color={colors[1]} />
		</List>
	)
}
