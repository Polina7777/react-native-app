export const getAllRecipes = async()=>{
    const response = await fetch('http://localhost:1337/api/foods',{method:'GET'});
    const data = await response.json();
    const recipes = data.data
    return recipes;
}

export const getRecipeById = async(id:string)=>{
    const response = await fetch(`http://localhost:1337/api/foods/${id}`,{method:'GET'});
    const data = await response.json();
    const recipe = data.data
    console.log(recipe)
    return recipe;
}
  export const getCategoriesOfRecipes = async() =>{
    const response = await fetch(`http://localhost:1337/api/categories`,{method:'GET'});
    const data = await response.json();
    const categories = data.data
    return categories;
  }

export const recipesApi = {getAllRecipes,getRecipeById,getCategoriesOfRecipes}