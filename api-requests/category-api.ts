export const getCategoriesOfRecipes = async() =>{
    const response = await fetch(`http://localhost:1337/api/categories`,{method:'GET'});
    const data = await response.json();
    const categories = data.data
    return categories;
  }

export const categoryApi = {getCategoriesOfRecipes}