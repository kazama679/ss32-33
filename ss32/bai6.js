let product1 = {
    id: 1,
    name: 'iPhone 11',
    price: 10000000,
};
let product2 = {
    id: 2,
    name: 'iPhone 12',
    price: 20000000,
};
let product3 = {
    id: 3,
    name: 'samsung note 10',
    price: 50000000,
};
if(product1.price>product2.price&&product2.price>product3.price){
    let all ={product1, product2, product3};
    console.log(all);
} else if(product1.price>product3.price&&product3.price>product2.price){
    let all ={product1, product3, product2};
    console.log(all);
} else if(product2.price>product3.price&&product3.price>product1.price){
    let all ={product2, product3, product1};
    console.log(all);
} else if(product2.price>product1.price&&product1.price>product3.price){
    let all ={product2, product1, product3};
    console.log(all);
} else if(product3.price>product1.price&&product1.price>product2.price){
    let all ={product3, product1, product2};
    console.log(all);
} else if(product3.price>product2.price&&product2.price>product1.price){
    let all ={product3, product2, product1};
    console.log(all);
} 