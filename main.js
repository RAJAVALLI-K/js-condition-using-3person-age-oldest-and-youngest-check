// 2-Take input of age of 3 people by user and determine oldest and youngest among them.

let a = parseInt(prompt('Enter a age:'));
let b = parseInt(prompt('Enter a age:'));
let c = parseInt(prompt('Enter a age:'));

if (a > b && a > c) {
    if (b > c) {
        console.log("A is oldest person and C is youngest person");
    }
    else{
        console.log("A is oldest person and B is youngest person");
    }
}

else if (b > c && b > a) {
    if (c > a) {
        console.log("B is oldest person and A is youngest person");
    }
    else{
        console.log("B is oldest person and C is youngest person");
    }
}
else if (c > b && c > a) {
    if (b > a) {
        console.log("C is oldest person and A is youngest person");
    }
    else{
        console.log("C is oldest person and B is youngest person");
    }
}

else {
    console.log('no oldest and youngest person')
}

