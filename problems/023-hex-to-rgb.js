/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let newArr = color.split("");
    let totalArr = [];
    if (newArr.length === 4) {
        for (let i = 1; i < newArr.length; i++) {
            totalArr.push(parseInt(newArr[i] + newArr[i], 16));
        }
    } else {
        for (let i = 1; i < newArr.length; i = i + 2) {
            totalArr.push(parseInt(newArr[i] + newArr[i + 1], 16));
        }
    }
    let total=`rgb(${totalArr[0]}, ${totalArr[1]}, ${totalArr[2]})`;
    return(total);
}

module.exports = hexToRgb;