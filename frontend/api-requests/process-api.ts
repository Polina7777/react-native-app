import { url_ngrok } from ".";

export const getProcessByIdWithSteps = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/processes/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const collection = data.data
    return collection;
}

export const processApi = {getProcessByIdWithSteps}