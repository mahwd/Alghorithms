import { performance } from 'perf_hooks';

export default class PerformanceTracker {

    private execution_time: number = 0;

    public track(callback: Function) {
        const start_time = performance.now()
        callback();
        const end_time = performance.now()
        this.execution_time = end_time - start_time;
    }

    public showStats() {
        console.log("=======================================")
        console.log(`Execution time: ${this.execution_time} milliseconds...`)
        console.log("=======================================")
    }
}