const API_KEY = "6a2ff57e71e8096613e42e330ee1426a";
const API_BASE = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint) => {
    const req =await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}
export default {
    getHomeList : async () => {
        return[
            {
                genre : "Orignals",
                title : "Netflix Orignals",
                items : await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                genre : "Recommandations",
                title : "Recommandations",
                items : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                genre : "Comedy",
                title : "Comedy",
                items : await basicFetch(`/movie/top_rated/?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                genre : "Horror",
                title : "Action",
                items : await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                genre : "Romance",
                title : "Romance",
                items : await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                genre : "Best of Week",
                title : "Best of Week",
                items : await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                genre : "Documentaries",
                title : "Documentaries",
                items : await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },   
            {
                genre : "Trending",
                title : "Trending",
                items : await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getmovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie' :
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break ;
                case 'tv':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    default:
                        info = null;
                        break;
            }
        }
        return info;
    }
}