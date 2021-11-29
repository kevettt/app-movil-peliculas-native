import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

    const getMovies = async () =>{
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine(peliculas);
        setIsLoading(false)
    }

    const getPopulateMovies = async () =>{
        const resp = await movieDB.get<MovieDBNowPlaying>('/popular');
        const peliculas = resp.data.results;
        setPeliculasPopulares(peliculas);
        setIsLoading(false)
    }

    useEffect(() => {
        //Obtener peliculas actuales en el cine
        //NowPlaying
        getMovies();
        getPopulateMovies();
    }, [])

    return{
        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
}

export default useMovies
