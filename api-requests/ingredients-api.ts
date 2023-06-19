import { url_ngrok } from ".";

export const getAllIngredients = async()=>{
    const response = await fetch(`${url_ngrok}api/ingredients?populate=*`,{method:'GET'});
    const data = await response.json();
    const ingredients = data.data
    return ingredients;
}

export const getAllIngredientCollections = async()=>{
    const response = await fetch(`${url_ngrok}api/ingredient-collections`,{method:'GET'});
    const data = await response.json();
    const collections = data.data
    return collections;
}

export const getAllIngredientCollectionsWithIngredients = async()=>{
    const response = await fetch(`${url_ngrok}api/ingredient-collections?populate=*`,{method:'GET'});
    const data = await response.json();
    const collections = data.data
    return collections;
}
export const getIngredientCollectionByIdWithIngredients = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/ingredient-collections/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const collection = data.data
    return collection;
}
export const getIngredientCollectionById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/ingredient-collections/${id}`,{method:'GET'});
    const data = await response.json();
    const collection = data.data
    return collection;
}



export const ingredientsApi = {getAllIngredients,getAllIngredientCollections,getAllIngredientCollectionsWithIngredients,getIngredientCollectionByIdWithIngredients,getIngredientCollectionById}