import PerformanceTracker from './performanceTracker'

function fibonacci(limit: number) {
    let fib_count: number = 2;
    let n = 0n;
    let next = 1n
    let temp: bigint;
    // console.log(`fib: ${n.toString()} fib index: 1| length: ${n.toString().length}`)
    // console.log(`fib: ${next.toString()} fib index: 2| length: ${next.toString().length}`)
    while (true) {
        if (next.toString().length >= limit) {
            console.log('fibonacci index: ', fib_count)
            return fib_count
        }
        temp = next
        next += n
        n = temp
        fib_count++
        // console.log(`fib: ${next.toString()} fib index: ${fib_count} length: ${next.toString().length}`)
    }
}

const pt = new PerformanceTracker();

let indexAtLimit;

pt.track(() => {
    // calculate fibonacci sequence
    indexAtLimit = fibonacci(1000)
    // end measurement
})

console.log("Fibonacci index at the limit: ", indexAtLimit)
pt.showStats()