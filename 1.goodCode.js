'use strict';

//Question -> What is good code?
//Answer   -> 1. Readable 2. Scalable

//Question -> How do you measure scalability?
//Answer   -> Big-O notation or Big-O Asymptotic Analysis

const fish = ['nemo'];

const school = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const ocean = new Array(10000).fill( 'nemo' );

function findNemo( array ) {
    let timeStart = performance.now();
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i] === 'nemo' ) {
            console.log( `Found NEMO!` );
        }
    }
    let timeEnd = performance.now();
    console.log( `Function Time: ${ timeEnd - timeStart } ms` );
}

findNemo( fish ); //0.5 ms
findNemo( school ); //0.6 ms
findNemo( ocean ); //1843.21 ms

//Question -> How long does it take to run a certain problem through a function or task?
//Question -> How can we measure the performance or efficiency of this code?

//Answer   -> Big-O notation is how we compare algorithms to determine which
//            is better in terms of scalability and efficieny.

//Question -> How is Big-O calculated?
//Answer   -> As input is increased how much does the algorithm slow down?

//Question -> What is this measurement called?
//Answer   -> Algorithmic efficiency.

//Question -> Why not use performance time to measure efficiency?
//Answer   -> Perfomance time is based on individual hardware. Big-O is
//            hardware independent and gives a much better measurement.