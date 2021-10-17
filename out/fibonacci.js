"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
function fibonacci(limit) {
    let fib_count = 2;
    let n = 0n;
    let next = 1n;
    let temp;
    // console.log(`fib: ${n.toString()} fib index: 1| length: ${n.toString().length}`)
    // console.log(`fib: ${next.toString()} fib index: 2| length: ${next.toString().length}`)
    while (true) {
        if (next.toString().length >= limit) {
            console.log('fibonacci index: ', fib_count);
            return fib_count;
        }
        temp = next;
        next += n;
        n = temp;
        fib_count++;
        // console.log(`fib: ${next.toString()} fib index: ${fib_count} length: ${next.toString().length}`)
    }
}
// start measure time
const startTime = perf_hooks_1.performance.now();
// calculate fibonacci sequence
fibonacci(1000);
// end measurement
const endTime = perf_hooks_1.performance.now();
console.log(`Finding fibonacci index with 1000 digits took: ${endTime - startTime} milliseconds`);
//# sourceMappingURL=fibonacci.js.map