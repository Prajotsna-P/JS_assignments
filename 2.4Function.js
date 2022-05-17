function map(allArr){
    var newArr=[];
for(var i =0; i< allArr.length; i++){
    newArr.push(Math.pow(allArr[i], 2));
}
 console.log("checking newArr",newArr)
}

map([2,5,8,9])
[2:03 PM, 5/17/2022] Akash: const square = x =>{
 var newArr=[];
for(var i =0; i< x.length; i++){
    newArr.push(Math.pow(x[i], 2));
}
return newArr;
} 
const maps = x => square(x)
var output = maps([4,8,9,], square)

 console.log("checking output",output)