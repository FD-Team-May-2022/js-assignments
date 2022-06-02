function largest(a, b) {
    if (a>b) {
        return a
    } else if (b>a) {
        return b
    } else {
        return "a and b are equal"
    }
}

console.log(largest(10,4) + " stop " + largest(11,11))

function parity(x) {
    if (x%2 == 0) {
        return x + " is even"
    } else return x + " is odd"
}

console.log(parity(5))