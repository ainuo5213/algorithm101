/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 */

const charSame = (s, t) => {
    const sArr = s.split('');
    const tArr = t.split('');
    const sortFn = (a, b) => a.codePointAt() - b.codePointAt();
    sArr.sort(sortFn);
    tArr.sort(sortFn);
    return sArr.join('') === tArr.join('')
};

module.exports = charSame;
