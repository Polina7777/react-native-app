//http://localhost:1337/api/foods?populate=*&filters[category][name][$eqi]=dinner

export const filtersByTags = async(tag:string)=>{
    const response = await fetch(`http://localhost:1337/api/foods?populate=*&filters[category][name][$eqi]=${tag}`,{method:'GET'});
    const data = await response.json();
    const recipes = data.data
    return recipes;
}
export const recipesApi = {filtersByTags}
