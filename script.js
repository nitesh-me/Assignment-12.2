var array =[10,8,12,36];

var newArray = array.map((value)=>{
    return value*2;
})
console.log("Given array ="+ array);
console.log("New Array  =" +newArray);

var filteredArray = newArray.filter((value)=>{
    return value >20;
})
console.log(" Filtered Arrya  ="+ filteredArray)


var sum =  filteredArray.reduce((acc, curr)=>{
    return acc + curr;
})
console.log(" Sum of filtered array  =" +sum);