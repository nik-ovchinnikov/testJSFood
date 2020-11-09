const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble (number, basis) {
    basis = basis || 2;
    console.log(number * basis);
}

function calcOrDouble1 (number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);