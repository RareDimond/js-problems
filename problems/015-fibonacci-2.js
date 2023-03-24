/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value===0) return 0;
    else if (value===1) return 1;
    let count=1;
    let countAkk=0;
    let countLast=0;
    let i=2;
    while (true) {
        countAkk=count;
        count=count+countLast;
        countLast=countAkk;
        if (count===value) break;
        else if (count>value) {
            return undefined;
        }
        i++;
    }
    return i;
}

module.exports = isFibonacci;
