import {useEffect,useState,useRef} from 'react';
import getLocation from './utils/getLocation';
import getHouseType from './utils/getHouseTypes';
import {housesData} from './data';


const Filters = ({data,setData,setFilteredData}) => {
	const ref = useRef();
	const [location,setLocation] = useState("canada");
    const [price,setPrice] = useState("1000 - 5000");
    const [houseType, setHouseType] = useState('House');
    const [date,setDate] = useState('');
    const uniqueLocation = getLocation();
    const uniqueHouseTypes = getHouseType();
	const prices = [
	    { value: "1000 - 5000" },
	    { value: "5000 - 10000" },
	    { value: "10000 - 15000" },
    ];

    const handleSearch = () => {
	    const prices = price.split('-');
	    setFilteredData([]);
	    var uniqueList = data.filter(house => {
	      var housePrice = parseInt(house.price.split(",").join(''));
	      if(location === house.location && houseType === house.type) {
	        if(housePrice >= prices[0] && housePrice<= prices[1]){
	          return house;
	        }
	      }
	    })
	    setFilteredData(uniqueList); 
    }

	return(
		<div className="filters">
	        <div className="location">
	          <label>Location</label>
	          <select onChange={e => setLocation(e.target.value)}>
	            {
	              uniqueLocation.map((location,index) => <option value={location} key={index}>{location}</option>)
	            }
	          </select>
	        </div>
	        <div className="date">
	          <label>When</label>
	          <input type="text" onChange={e=>setDate(e.target.value)} ref={ref} placeholder="Select Move-in date" onFocus={() => (ref.current.type='date')}/>
	        </div>
	        <div className="cost">
	          <label>Price</label>
	          <select onChange={e => setPrice(e.target.value)}>
	            {prices.map((price, index) =>
	                <option key={index}>{price.value}</option>
	              )
	            }
	          </select>
	        </div>
	        <div>
	          <label>Property Type</label>
	          <select onChange={e => setHouseType(e.target.value)}>
	            {
	              uniqueHouseTypes.map((house,index) => <option value={house} key={index}>{house}</option>)
	            }
	          </select>
	        </div>
	        <button onClick={handleSearch}>Search</button>
        </div>
	)
}

export default Filters;