import axios from "axios";

const UNSPLASH_ACCESS_KEY = 'Rm1JYihKgWbyVHWLlkOJXGDT8CXjjltQupxjU_FViNM';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
const LOREM_PICSUM_URL = 'https://picsum.photos/400/200';

export const fetchRandomImage = async (): Promise<string> => {
    try {
        const response = await axios.get(UNSPLASH_URL);
        return response.data.url;
    } catch (error) {
        console.error('Error fetching random image:', error);
        return LOREM_PICSUM_URL;
    }
}