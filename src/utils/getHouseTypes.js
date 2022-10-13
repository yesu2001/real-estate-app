import {housesData} from '../data';

export default function getHouseType() {
	const houseTypes = housesData.map(data => data.type);
	const uniquetypes = [...new Set(houseTypes)]
	return uniquetypes;
}
