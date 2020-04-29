const a2i = require('./a2i');

test('测试字符串转换为数字', () => {
    expect(a2i("42")).toBe(42);
    expect(a2i("-42")).toBe(-42);
    expect(a2i("4193 with words")).toBe(4193);
    expect(a2i("words and 987")).toBe(0);
    expect(a2i("-91283472332")).toBe(-2147483648);
    expect(a2i("91283472332")).toBe(2147483647);
});