//Question -> What is O(1)?
//Answer   -> Constant Time.

//Question -> What is Constant Time?
//Answer   -> As the elements increase -
//            the number of operations remains as 1.

const heroes = ['The Coder Hero', 'Webz', 'Stylez', 'AJAX'];

//O(1) Function
function printFirstHero( heroes ) {
    //No matter how many elements we input
    console.log( heroes[0] ); // O(1)
    //The operations remain Constant
};

//O(1) Function
function printHeroes( heroes ) {
    console.log( heroes[0] ); //O(1)
    console.log( heroes[1] ); //O(1)
};

printHeroes( heroes ); //O(2) Constant 2 operations

//Question -> Does the amount of Constant Time operations change the Big-O notation?
//Answer   -> No! Constant Time operations are rounded down to O(1) notation.