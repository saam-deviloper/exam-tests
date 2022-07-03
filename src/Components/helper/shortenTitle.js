const shortenTitle = (name) =>{
    let result = name.split(' ');
    return result[0]+' '+result[1]+' '+result[2]+'...'
}
export default shortenTitle