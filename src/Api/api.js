export const api = async ()=>{
    let result  = await (await fetch('https://fakestoreapi.com/products')).json();
    // console.log(result.data);
    return result;
}