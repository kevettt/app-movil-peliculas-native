import axios from 'axios'


const movieDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key:"388468501f672ae583089dd45e876be1",
        language:"es-ES"
    }
})

export default movieDB;