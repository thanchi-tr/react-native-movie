import axios from "axios";
import {TMDB, EndPoint} from "@/constants/configs"
    ;
export const fetchMovie = async ({ query }: { query: string }) => {
    try {
        const endpoint = query
            ? `${TMDB.BASEURL}${EndPoint.SEARCH}${encodeURIComponent(query)}`
            : `${TMDB.BASEURL}${EndPoint.DISCOVER}`;

        const response = await axios.get(endpoint, { headers: TMDB.headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error; // or handle gracefully
    }
};