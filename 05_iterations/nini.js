const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//    console.log('acc: ${acc} and currval: ${currval');
//    return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemsName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        proice: 2999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
          itemName: "data sciece course",
          price: 12999
    },
]

const priceTopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);