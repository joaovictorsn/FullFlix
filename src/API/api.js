import axios from "axios";

export const getList = (setState)=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bbce7167460fc6cd3bbb7c7fb20d48d1&language=pt-BR&page=1`)
.then((response)=>{
        console.log(response.data)
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetails = (id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bbce7167460fc6cd3bbb7c7fb20d48d1&language=pt-BR`)
.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})}