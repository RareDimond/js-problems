/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let sum1 = 0;
    let sum2 = 0;
    let numberNew = number.split("");
    for (let i = 0; i < numberNew.length; i++) {
        if (i < 3) sum1 += +numberNew[i];
        else sum2 += +numberNew[i];
    }
    if (sum1 === sum2) return true;
    return false;
}

module.exports = checkTicket;
