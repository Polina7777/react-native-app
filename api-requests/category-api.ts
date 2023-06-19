import { url_ngrok } from ".";

export const getCategoriesOfRecipes = async() =>{
    const response = await fetch(`${url_ngrok}api/categories`,{method:'GET'});
    const data = await response.json();
    const categories = data.data
    return categories;
  }

export const categoryApi = {getCategoriesOfRecipes}