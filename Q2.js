/*
Write a program to get a sum of even and odd numbers between 1 to 100

*/

function sumofeven() {
    sum=0;
    for (let int = 0; int <= 100; int+=2) {
          sum+=int;
    }
    return sum;
}

function sumofOdd() {
     rum=0;

    for (let i = 1; i <=100; i+=2) {
             rum+=i;
    }
    return rum;
}

console.log("Sum of even number is -> "+sumofeven());
console.log("Sum of odd number is -> "+sumofOdd());