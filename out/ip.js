"use strict";
const generateIp = function (s) {
    let output = [];
    function backtrack(ip, arr) {
        console.log("ip: ", ip);
        if (arr.length === 4)
            return;
        let len = ip.length < 3 ? ip.length : 3;
        for (let i = len; i > 0; i--) {
            let integer = ip.slice(0, i);
            if (!valid(integer))
                continue;
            arr.push(integer);
            if (arr.length === 4 && !ip.slice(i).length)
                output.push(arr.join('.'));
            else
                backtrack(ip.slice(i), arr);
            arr.pop();
        }
    }
    backtrack(s, []);
    return output;
};
function valid(integer) {
    if (!integer.length || parseInt(integer) > 255)
        return false;
    if (integer[0] === "0" && integer.length > 1)
        return false;
    return true;
}
const ip = "2552534143";
console.log(generateIp(ip));
//# sourceMappingURL=ip.js.map