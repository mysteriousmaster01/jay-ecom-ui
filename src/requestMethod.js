import  axios  from 'axios';

const BASE_URL = "https://ecommerce-jayprajapati.herokuapp.com/api/";
const TOKEN = "";
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken);


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})