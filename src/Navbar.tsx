import React from 'react';
import { Section } from './Section';

interface NavbarInterface {
	name: string;
	sections: string[];
}

const Navbar = (props: NavbarInterface): any => (
	<div className="navbar">
		{props.name}
		{props.sections.map(section => <Section name={section} href="./link/to/somewhere/"/>)}
		<p>search icon</p>
		<p>dark mode icon</p>
	</div>
);

export default Navbar;
