const shortenName = (email) =>{
    let slicedString = email.split('@');
    return slicedString[0]
}
export default shortenName;