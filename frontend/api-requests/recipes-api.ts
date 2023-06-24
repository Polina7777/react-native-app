import { url_ngrok } from ".";

export const getAllRecipes = async()=>{
    const response = await fetch(`${url_ngrok}api/foods`,{method:'GET'});
    const data = await response.json();
    const recipes = data.data
    return recipes;
}
export const getAllRecipesWithIngredientCollection = async()=>{
    const response = await fetch(`${url_ngrok}api/foods?populate=*`,{method:'GET'});
    const data = await response.json();
    const recipes = data.data
    return recipes;
}
export const getRecipeById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/foods/${id}`,{method:'GET'});
    const data = await response.json();
    const recipe = data.data
    return recipe;
}
export const getRecipeByIdWithIngredientCollection = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/foods/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const recipe = data.data
    return recipe;
}


export const recipesApi = {getAllRecipes,getRecipeById,getRecipeByIdWithIngredientCollection,getAllRecipesWithIngredientCollection}