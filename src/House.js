import './App.css';
import {useState} from 'react';

const House = ({house}) => {
	const [liked,setLiked] = useState(false);
	const like = 'https://img.icons8.com/material-rounded/96/7467EF/hearts.png';
	const unlike = 'https://img.icons8.com/ios-glyphs/90/7467EF/hearts.png';
	const favourites = [];

	const likeHandler = () => {
		setLiked(!liked)
	}


	return (
		<div className="house">
          <img className="house-image" src={house.image} alt="house"/>
          <div className="details">
	          <div className="amount">
	            <p><b>${house.price}</b>/month</p>
	            <img src={liked ? like : unlike} onClick={likeHandler} alt="heart icons"/>
	          </div>
	          <h2 className="houseName">{house.name}</h2>
	          <p className="address">{house.address}</p>
	          <div className="features">
	            <div className="feature">
	              <img src="https://img.icons8.com/ios/50/7467EF/bed.png" alt="bed icon"/>
	              <p>{house.bedrooms} Beds</p>
	            </div>
	            <div className="feature">
	              <img src="https://img.icons8.com/ios/50/7467EF/bath.png" alt="shower tub"/>
	              <p>{house.bathrooms} Bathroom</p>
	            </div>
	            <div className="feature">
	              <img src="https://img.icons8.com/ios-filled/50/7467EF/surface.png"/>
	              <p>{house.surface}</p>
	            </div>
	          </div>
	       </div>
        </div>
	)
}


export default House;
