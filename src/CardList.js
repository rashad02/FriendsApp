import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
	const CardComponent= robots.map((user,i)=>{
		return(
		
			<Card 
			key={robots[i].id} 
			id={robots[i].id}
			name={robots[i].name} 
			email={robots[i].email}
			image={robots[i].image} />

		);
	});
	return(
		<div>
			{CardComponent};	
		</div>
	);
}

export default CardList;