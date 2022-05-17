function find(arr){
    isEven(arr[0])
}

function isEven(firstElement){
var evenOrNot = firstElement%2 == 0;
if(evenOrNot){
    console.log("True")
}else{
    console.log("False")
}

}

find([11,2,3])
const isEven = x => x%2 == 0
const find = x => isEven(x[0])
var output = find([3,2,3,], isEven)

console.log("checking isEven",output)