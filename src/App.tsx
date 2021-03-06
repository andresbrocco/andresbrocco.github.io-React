import React from 'react';
import './App.css';
import Navbar from './Navbar';
import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import { createMuiTheme } from '@material-ui/core/styles';

const myName: string = "Andre Sbrocco Figueiredo";
const sectionNames: string[] = ["Bio", "Skills", "Experience", "Accomplishments", "Projects", "Publications", "Contact", "CV"];

const App = () => (
	<div className="App" >
		<Navbar name={myName} sections={sectionNames} isExpanded={false} currentTab={0} smallScreen={false} />
		<BioSection />
		<SkillsSection />
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio debitis odit, qui similique, nulla repudiandae, labore voluptas corporis tempore animi architecto reiciendis facilis possimus minus. Maxime quos et veritatis deleniti!</p>
	</div>
);

export default App;
