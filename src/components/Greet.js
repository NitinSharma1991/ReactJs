import React, { Children } from 'react';


const Greet = (props) => {
return (
<div>
<h1>Hello {props.name} is {props.heroName}</h1> 
{props.children}
</div>);
}

export default Greet;