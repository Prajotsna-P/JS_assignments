function compose(square,double){
    return x=> square(double(x));
}

const square = function(n) {return n*n ;}
const double = function(n) {return n*2;}

let result = compose(square,double);



console.log(result(5))
