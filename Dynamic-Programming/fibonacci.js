function fibonacci(n) {
    if (n <= 0) {
        return "Input should be a positive integer.";
    }

    let sequence = [0, 1];

    for(let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence[n];
}

console.log(fibonacci(10));  // It will print 55, which is the 10th number in the Fibonacci sequence.
