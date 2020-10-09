import React from 'react';
import './App.css';
import { Grid, Button } from '@material-ui/core';


const App = () => (
	<div className="App">
		<h1>Hello, World!!!!</h1>
		<Grid container direction="column" justify="flex-start" alignItems="stretch">
			<Grid item xs={12}>
				<p>Paragraph! </p>
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
				<p>something else here</p>
			</Grid>
		</Grid>
	</div>
);

export default App;
