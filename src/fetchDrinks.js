import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async(url) => {
    showLoading();

    try {
        const responses = await fetch(url);
        const data = await responses.json();
         return data;
    } catch (error) {
        console.log(error);
    }
} 

export default fetchDrinks;