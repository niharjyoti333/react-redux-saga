import React from 'react';
export default function courseDisplay({data}){
	return(<div>
	{data.map((img,index)=>(
		<img key={index} src={img} width='80px' height='80px' style={{margin:'10px'}}/>
		))}
	</div>)
}
