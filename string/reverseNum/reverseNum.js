/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个
 * 假设，如果反转后整数溢出那么就返回 0。
 *
 */

const reverse = x => {
    if (typeof x !== 'number') {
        return;
    }
    const MAX = 2147483647;
    const MIN = -2147483648;
    
    function reverse(str) {
        return str.split('').reverse().join('')
    }
    
    const numStr = x.toString();
    const reversedNum = x > 0 ? reverse(numStr) : reverse(numStr.slice(1));
    const result = x > 0 ? parseInt(reversedNum) : (0 - parseInt(reversedNum));
    if (result >= MIN && result <= MAX) {
        return result;
    }
    return 0
};

module.exports = reverse;