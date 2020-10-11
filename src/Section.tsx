import React from 'react';

interface SectionInterface {
	name: string;
	href: string;
}

export const Section = (props: SectionInterface): any => (
	<div>{props.name}</div>
)
