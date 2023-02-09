import {API_KEY} from '../../Components/Constant/Constants'


export const originals =`/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const Action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;