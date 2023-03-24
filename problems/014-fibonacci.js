/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
    let count=1;
    let countAkk=0;
    let countLast=0;
    for (let i = 2; i <= n; i++) {
        countAkk=count;
        count=count+countLast;
        countLast=countAkk;
    }
    if (n===0) return 0;
    return count;
}
module.exports = fibonacci;
