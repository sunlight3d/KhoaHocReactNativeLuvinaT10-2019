// 1 js file = 1 module
//const ref to a function
const sum = (x, y) => {
    return x + y
}
function multiply(x, y) {
    return x * y
}
let mobiles = [{
    name: "iphone 5",
    year: 2015
},{
    name: "iphone 8",
    year: 2018
},{
    name: "iphone 6",
    year: 2016
},{
    name: "iphone 7",
    year: 2017
}]


mobiles = mobiles.sort((m1, m2) => {
    return m1.year - m2.year
})
//alert(JSON.stringify(mobiles))
let mrHoang = {
    name: "Hoang",
    age: 30
}
let mrA = mrHoang //ref an object
let mrB = JSON.parse(JSON.stringify(mrHoang)) //clone an object(classic)
let mrC = {...mrHoang}//clone an object
mrHoang.age = 40
//alert(JSON.stringify(mrC))
mobiles.push({name: "iphone X", year: 2019})
//delete by filtering
mobiles = mobiles.filter(mobile => {
    return mobile.year !== 2016
})

export {
    sum, 
    multiply,
    mobiles
}