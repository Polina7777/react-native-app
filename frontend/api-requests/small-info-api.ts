import { url_ngrok } from ".";

export const getSmallInfoById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/small-extra-info/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const collection = data.data
    return collection;
}



export const smallInfoApi = {getSmallInfoById}