//Question -> What is the Big-O notation for nested loops?
//Answer   -> O(n^2)

//Log all pairs of an array
const numbers = [ 'a', 'b', 'c', 'd', 'e' ];

function logAllPairsOfArray( array ) {
    for ( let i = 0; i < array.length; i++ ) {
        for( let j = 0; j < array.length; j++ ) {
            console.log( array[i], array[j] );
        }
    }
}

logAllPairsOfArray( numbers );

//Question -> What is O(n^2) ?
//Answer   -> Quadratic Time.

//Question -> What is Quadratic Time?
//Answer   -> As the number of elements increases
//            the number of operations increases quadratically

//Question -> Is O(n^2) only for nested loops?