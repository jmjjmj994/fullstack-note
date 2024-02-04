import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'
//http://localhost:3001/api/notes


const getAll = () => {
   const request = axios.get(baseUrl)
   return request
}


export const fetches = {
    getAll:getAll
}