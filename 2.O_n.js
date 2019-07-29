'use strict';

//Question -> How are Big-O complexities measured?
//Answer   -> As the number of elements increases, how does it effect the
//            the number of operations performed?

//Question -> What is O(n)?
//Answer   -> Linear Time.

//Question -> What is Linear Time?
//Answer   -> As the number of elements increases
//            the number of operations increases equally.

//Question -> How common in O(n) operations?
//Answer   -> O(n) is very common and has a "Fair" complexity rating.

const fish = ['nemo'];
const school = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const ocean = new Array(10000).fill( 'nemo' );

//O(n) Function
function findNemo( array ) {
    //Loop through each element of the array
    for ( let i = 0; i < array.length; i++ ) {
        //Perform 1 operation per element
        if ( array[i] === 'nemo' ) { // 1 operation
            console.log( `Found NEMO!` );
        }
    }
}

findNemo( fish );   //1 element = 1 operation
findNemo( school ); //10 elements = 10 operations
findNemo( ocean );  //10,000 elements = 10,000 operations

//O(n) Function
const compressAllBoxes = boxes => {
    //As boxes increases, operations increase equally
    boxes.forEach( box => console.log( box) );
}