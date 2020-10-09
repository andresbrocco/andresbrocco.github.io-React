import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Grid, Button } from '@material-ui/core';

const myName: string = "Andre Sbrocco Figueiredo";
const sectionNames: string[] = ["Bio", "Skills", "Experience", "Accomplishments", "Projects", "Publications", "Contact", "CV"];

const App = () => (
	<div className="App">
		<h1>Hello, World!!!!</h1>
		<Grid container direction="column" justify="flex-start" alignItems="stretch">
			<Grid item xs={12}>
				<Navbar name={myName} sections={sectionNames} />
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
				<p>something here</p>
			</Grid>
		</Grid>
	</div>
);

export default App;
