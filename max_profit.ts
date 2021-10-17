import PerformanceTracker from "./performanceTracker";
const stock_prices: number[] = [7, 6, 4, 3, 4];

const get_max_profit = (prices: number[]) => {
    let max_price = 0, min_price = prices[0];
    prices.forEach(price => {
        price <= min_price 
            ? min_price = price 
            : max_price = Math.max(max_price, price - min_price)
    })
    return max_price
}

const pt = new PerformanceTracker();

pt.track(() => {
    const max_profit = get_max_profit(stock_prices);
    console.log(`max profit: ${max_profit}`);
})

pt.showStats();