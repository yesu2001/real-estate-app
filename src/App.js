import './App.css';
import {housesData} from './data';
import HouseList from './HouseList';
import {useEffect,useState,useRef} from 'react';
import FilteredHouseList from './FilteredHouseList';
import Filters from './Filters';


function App() {
  const [data,setData] = useState(housesData);
  const [filteredData,setFilteredData] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Estatery</h1>
        <p className="favorite">favourites</p>
      </header>
      <Filters data={data} setData={setData} setFilteredData={setFilteredData}/>
      <HouseList houseData={filteredData.length===0 ? data:filteredData}/>      
    </div>
  );
}

export default App;
