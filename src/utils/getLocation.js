import {housesData} from '../data';

export default function getLocation() {
	const locations = housesData.map(data => data.location);
	const uniqueLocation = [...new Set(locations)]
	return uniqueLocation;
}


