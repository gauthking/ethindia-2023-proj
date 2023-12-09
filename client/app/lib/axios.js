import axios from "axios";
// import { Url } from "../constants/Url";
const baseUrl="http://localhost:8080";
const Axios = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});
//commiot
export const AxiosGet = async (url,objects) => {
  console.log(baseUrl+"/"+url)
  const { data } = await Axios.get(url)
  console.log(url,objects,data);
  
  return data;
};

export const AxiosPost = async (url, objects) => {
  console.log(baseUrl+"/"+url)

  const response = await Axios.post(url, objects);
  console.log(url,objects);
  return response;
};
 