import './App.css';
import House from './House';
import {useEffect} from 'react';

const HouseList = ({houseData}) => {
	return (
		<div className="houses">
			{
				houseData.length>0 ? (houseData.map((house,index) =>
					<House key={index} house={house}/>
				)): <h1>No Houses</h1>
			}
		</div>
	)
}


export default HouseList;
