const basicCalc = () => {
    let fibanocci_index = process.argv[2]
    let previous = 0 , current = 1, temp;
    while(fibanocci_index >= 0) {
        temp = current;
        current = previous + current;
        previous = temp;
        fibanocci_index--
    }
    console.log(previous)
    return previous
}

function fibonacci(num, fn) {
    if (num <= 1) return 1;
    console.log(`which fn ==> ${fn} , ${num}`)
    return fibonacci((num - 1), 'a') + fibonacci((num - 2), 'b');
  }

  function fibonacciMem(num, memo) {
    memo = memo || {};
  console.log(memo)
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacciMem(num - 1, memo) + fibonacciMem(num - 2, memo);
  }

  console.log(fibonacciMem(process.argv[2], {}))