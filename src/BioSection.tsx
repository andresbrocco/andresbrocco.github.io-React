import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './BioSection.css'
import {ListItemIcon} from '@material-ui/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { websiteURL } from './index';

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		alignItems: "center",
	},
	name: {
		marginTop: "1em",
	},
	title: {
		marginTop:"0px",
	},
	contactList: {
		padding: "0px",
		'& li': {
			listStyleType: "none",
			padding: "10px",
			display: "inline",
			'& .MuiListItemIcon-root':{
				minWidth: "0px",
			} 
		}
	},
	first: {
		textAlign: "center",
		padding: "2em 0em 1.5em 0em",
		[theme.breakpoints.up("md")]: {
			width: "400px",
			padding: "2em 1.5em 0em 1.5em",
		},
		'& img': {
			width: "200px",
			height: "200px",
			borderRadius: "50%",
			objectFit: "cover",
			objectPosition: "center",
			display: "block",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	second: {
		padding: "0em 1.5em 1.5em 1.5em",
		maxWidth: "800px",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
		},
		[theme.breakpoints.up("sm")]: {
			width: "85%",
		},
		[theme.breakpoints.up("md")]: {
			width: "70%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "55%",
		},
	},
}));

interface IEducationItem {
	title: string;
	year: number;
	institution: string;
};

function EducationItem (props: IEducationItem): JSX.Element {
	return(
		<ListItem>
			<ListItemIcon>
				<FontAwesomeIcon icon={faGraduationCap} size="2x"/>
			</ListItemIcon>
			<ListItemText primary={props.title} secondary={`${props.institution}, ${props.year}`} />
		</ListItem>
	)
};

interface IContactItem {
	url: string;
	icon: IconProp;
};


function ContactItem (props: IContactItem): JSX.Element {
	const url = new URL(props.url, 
											process.env.NODE_ENV=="development" ? 
											"http://localhost:3000" : websiteURL.href );
	return (
		<a href={url.href}>
			<li>
				<ListItemIcon>
					<FontAwesomeIcon icon={props.icon} size="lg" />
				</ListItemIcon>
			</li>
		</a>
	)
};

export default function BioSection () {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.first}>
				<img src="../avatar.jpg" alt="Profile Image" />
				<Typography variant="h4" className={classes.name}>
					Andre Sbrocco Figueiredo
				</Typography>
				<Typography variant="h6" className={classes.title}>
					Software Developer
				</Typography>
				<ul className={classes.contactList}>
					<ContactItem icon={faEnvelope} url="mailto:andresbrocco@gmail.com"/>
					<ContactItem icon={faLinkedin} url="https://linkedin.com/in/andresbrocco"/>
					<ContactItem icon={faGithub} url="https://github.com/andresbrocco"/>
					<ContactItem icon={faFileAlt} url="/cv.pdf"/>
				</ul>
			</div>

			<div className={classes.second}>
				<h2>Biography</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima quibusdam dignissimos earum adipisci sed libero laboriosam velit culpa suscipit qui molestias nisi, ipsum molestiae possimus asperiores. Aliquid, aut. Deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima quibusdam dignissimos earum adipisci sed libero laboriosam velit culpa suscipit qui molestias nisi, ipsum molestiae possimus asperiores. Aliquid, aut. Deserunt?</p>
				<h3>Education</h3>
				<List >
					<EducationItem title="M1 in Mechanical Engineering" year={2018} institution="University of Campinas" />
					<EducationItem title="Bsc Engineering" year={2016} institution="University of Campinas" />
					<EducationItem title="FdEng Mechatronics" year={2012} institution="Technical College of Campinas" />
				</List>
			</div>
		</div>
	)
};
