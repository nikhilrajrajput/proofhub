// Write a program to find the given number is odd/even without a conditional statement


let check= function checkNumber() {
    let n=5;
    let a=["even", "odd"];
    console.log(a[n%2]);
}

check();