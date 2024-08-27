import axios from "axios";
//clouser
export const httpClient = () =>{
  return axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000,
    headers :{Authorization : `Bearer ${token}`},
  });
}