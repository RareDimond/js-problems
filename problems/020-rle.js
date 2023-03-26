/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let count = 1;
    let newArr = value.split("");
    let totalArr = [];
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] === newArr[i - 1]) {
            count++;
        } else {
            if (count>1){
            totalArr.push(count + newArr[i - 1]);
            count = 1;
            }
            else{
                totalArr.push(newArr[i-1])
            }
        }
        if (i === newArr.length - 1) {
            if (count>1)  totalArr.push(count + newArr[i]);
            else totalArr.push(newArr[i]);
        }
    }
    return totalArr.join("");
}

module.exports = rle;
