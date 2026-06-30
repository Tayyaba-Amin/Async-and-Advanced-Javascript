// Optional Chaining (?.): Safely access nested properties.
const user = {
    address:"Gujrat"
};
//console.log(user.address.city);
console.log(user?.address?.city);
//console.log(user?.address);
