import axios from "axios";

const API_Url = 'https://api.themoviedb.org/3/movie/';

const API_Key = 'api_key=bbce7167460fc6cd3bbb7c7fb20d48d1';

export const getList = (setMovies)=>{
    axios.get(`${API_Url}popular?${API_Key}&language=pt-BR&page=2`)
.then((response)=>{
        console.log(response.data)
        // aqui eu "seto" o estado com o q eu terei de retorno
        setMovies(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetails = (movieId, setDetails)=>{
    axios.get(`${API_Url}${movieId}?${API_Key}&language=pt-BR`)
.then((response)=>{
    setDetails(response.data)
}).catch((error)=>{
    console.log(error)
})}