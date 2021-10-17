import PerformanceTracker from './performanceTracker';

const findTrappedWater = (arr: Array<number>) => {
    const n = arr.length;

    const high_bars_left: Array<number> = [arr[0]];
    const high_bars_right: Array<number> = [];
    // iterating to fill left high bars
    for (let i = 1; i < n; i++) {
        high_bars_left[i] = Math.max(arr[i], high_bars_left[i - 1]);
    }

    high_bars_right[n - 1] = arr[n - 1]
    // iterating to fill right high bars
    for (let i = n - 2; i >= 0; i--) {
        high_bars_right[i] = Math.max(arr[i], high_bars_right[i + 1]);
    }

    // console.log(`high_bars_left: ${high_bars_left}`)
    // console.log(`high_bars_right: ${high_bars_right}`)

    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(high_bars_left[i], high_bars_right[i]) - arr[i];
    }
    return water;
}
const elevation_map = [0, 2, 4, 2, 3, 7, 4, 8, 5, 3, 6, 1, 6, 5];

const pt = new PerformanceTracker();

let water;

pt.track(() => {
    water = findTrappedWater(elevation_map)
})

console.log('water trapped inside blocks: ', water)
pt.showStats();
