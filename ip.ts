import PerformanceTracker from './performanceTracker'
class Ip {

    private ipList: Array<string> = [];
    isListReady: boolean = false;

    private backtrack(ip: string, arr: Array<string>) {
        if (arr.length === 4) return;
        let len = ip.length < 3 ? ip.length : 3;
        for (let i = len; i > 0; i--) {
            let ip_sequence = ip.slice(0, i);
            if (!valid(ip_sequence)) continue;
            arr.push(ip_sequence);
            if (arr.length === 4 && !ip.slice(i).length) this.ipList.push(arr.join('.'));
            else this.backtrack(ip.slice(i), arr)
            arr.pop();
        }
    }

    generateIpList(str: string) {
        this.backtrack(str, [])
        this.isListReady = true
    }

    getIpList() {
        if (this.isListReady)
            return this.ipList
        else
            console.log("I guess you forgot to call generateIpList method -_- ")
    }

    printIpList() {
        if (this.isListReady)
            console.log(this.ipList)
        else
            console.log("I guess you forgot to call generateIpList method -_- ")

    }
};

function valid(ip_sequence: string) {
    if (!ip_sequence.length || parseInt(ip_sequence) > 255) return false;
    if (ip_sequence[0] === "0" && ip_sequence.length > 1) return false;
    return true;
}

const ip_string: string = "0304143";

const ip = new Ip();
const pt = new PerformanceTracker();

pt.track(() => {
    ip.generateIpList(ip_string)
})

ip.printIpList();
pt.showStats();