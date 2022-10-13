import House from './House';
const FilteredHouseList = ({houseData}) => {
	return (
		<div className="houses">
			<h1>{houseData.length} Houses found</h1>
			{
				houseData.length > 0 ? (houseData.map((house,index) =>
					<House key={index} house={house}/>
				)):<h1>No Houses</h1>
			}
		</div>
	)
}

export default FilteredHouseList;