/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let i = 0;

    if (n === 1) return 0;
    else if (n % 2 === 0) {
        while (true) {
            if (n >= 2) {
                n = n / 2;
                i++;
            } else break;
        }
        if (n === 1) return i;
    } else {
        return undefined;
    }
}
module.exports = getPower;
