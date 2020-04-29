const charSame = require('./charSame');

test('测试是否是有效的字母异位单词', () => {
    const s = "anagram", t = "nagaram";
    const s1 = "anagram", t1 = "asdas";
    expect(charSame(s, t)).toBe(true);
    expect(charSame(s1, t1)).toBe(false);
});