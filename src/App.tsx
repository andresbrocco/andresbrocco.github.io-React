import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Grid, Button } from '@material-ui/core';

const myName: string = "Andre Sbrocco Figueiredo";
const sectionNames: string[] = ["Bio", "Skills", "Experience", "Accomplishments", "Projects", "Publications", "Contact", "CV"];

const App = () => (
	<div className="App">
		<Navbar name={myName} sections={sectionNames} />
	</div>
);

export default App;
