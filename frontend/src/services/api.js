import axios from "axios"
import { commonAPI } from "./commonApi";
const api_url = "http://localhost:3000"


export const registerUser = async (userdata) => {
    return  await commonAPI("POST",`${api_url}/register`,userdata,"");  
};
export const loginUser = async (userdata) => {
    return  await commonAPI("POST",`${api_url}/login`,userdata,"");  
};