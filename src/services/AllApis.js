import CommonStructure from './CommonStructure'
import BaseUrl from './BaseUrl'

//add item
export const addItemAPI = async(bodyData)=>{
    return await CommonStructure('POST',`${BaseUrl}/items`,bodyData)
}

//get items
export const getItemsAPI = async()=>{
    return await CommonStructure('Get',`${BaseUrl}/items`,{})
}

//delete item
export const deleteItemAPI=async(id)=>{
    return await CommonStructure('DELETE',`${BaseUrl}/items/${id}`,{})
}

//update item
export const updateItemAPI = async(id,bodyData)=>{
    return await CommonStructure('PATCH',`${BaseUrl}/items/${id}`,bodyData)
}