import { url_ngrok } from ".";

export const filtersByTags = async(id:string)=>{
    console.log(id)
    const response = await fetch(`${url_ngrok}api/foods?populate=*&filters[categories][id][$eqi]=${id}`,{method:'GET'});
    const data = await response.json();
    const filteredData = data.data
    return filteredData;
}
export const filtersApi = {filtersByTags}
