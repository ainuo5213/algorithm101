const a2i = str => {
    const res = str.trimStart().match(/^(-|\+)?\d+/g);
    return res ? Math.max(Math.min(+res[0], Math.pow(2, 31) - 1), -Math.pow(2, 31)) : 0
};

module.exports = a2i;