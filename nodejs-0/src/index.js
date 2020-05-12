'use strict'

const fibonacci = (num) => {
    var next = 0;
    var array = [0, 1];

    for(let index = 0; next < num; index++) {
        next = array[index] + array[index+1];
        array.push(next);
    }
    return array;
}

const isFibonnaci = (num) => {
    
    return fibonacci(num).includes(num);

}

module.exports = {
    fibonacci,
    isFibonnaci
}
