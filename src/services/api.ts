// import params from "../App.jsx"
import axios from "axios";







export interface Data {
	total: number;
	total_pages: number;
	results: [];
}


export const requestPicturesBySearchValue = async (searchedPic: string, imagesPerPage: number): Promise<Data> => {
	const params = {
		client_id: "x5sxi2JDw6Skaao-Xvuci0r8y8gKaUKyGcYEAlWne6c",
		query: searchedPic,
		page: imagesPerPage,
		per_page: 12,
	};

	const response = await axios.get("https://api.unsplash.com/search/photos/", {
		params,
	});
	
	return response.data;
};
