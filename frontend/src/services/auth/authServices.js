import axios from "axios";

const baseUrl = 'http://localhost:8080/api/auth';

export const register =async ({email , password, username})=>{
    try {
        const response =await axios.post(`${baseUrl}/signup` ,
        {username , email , password},
        {withCredentials : true}
        );
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export const login = async ({email, password})=>{
    try {
        const response = await axios.post(`${baseUrl}/login`,
            {email, password},
            {withCredentials : true}
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const logout = async ()=>{
    try {
        const response = await axios.get(`${baseUrl}/logout`, {withCredentials :true});
        return response.data;
    } catch (error) {
        console.log (error);
    }
}

export const getMe = async ()=>{
    try {
        const response = await axios.get(`${baseUrl}/get-me`, {withCredentials:true});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}