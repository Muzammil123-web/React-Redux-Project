import {ADD_TO_CART,REMOVE_FROM_CART} from "../Constants";

export default  function addToCart(data){
    console.warn("action",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
             
    
}
export function RemoveFromCart(data){
    console.warn(data);
    return{
        type:REMOVE_FROM_CART,
        data:data
    }
             
    
}