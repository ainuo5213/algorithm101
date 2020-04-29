const reverseNum = require('./reverseNum');

test('测试反转字符串', function () {
    const positiveNumber = 321;
    const negativeNumber = -321;
    const MaxNumber = 2147483647;
    const minNumber = -2147483647;
    const str = 'asdas';
    expect(reverseNum(positiveNumber)).toBe(123);
    expect(reverseNum(negativeNumber)).toBe(-123);
    expect(reverseNum(MaxNumber)).toBe(0);
    expect(reverseNum(minNumber)).toBe(0);
    expect(reverseNum(str)).toBe(undefined);
});