/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let count1 = 0;
    let count2 = 0;
    let countIndexOf1 = 0;
    let countIndexOf2 = 0;
    let countIndex1 = 0;
    let countIndex2 = 0;
    let newArr = value.split("");
    let arrIndex = [];
    let countFalse = 0;
    newArr.forEach((element) => {
        if (element === "(") count1++;
        else if (element === ")") count2++;
    });
    if (count1 === count2 && !!value) {
        for (let i = 0; i < count1; i++) {
            countIndex1 = newArr.indexOf("(", countIndexOf1);
            countIndex2 = newArr.indexOf(")", countIndexOf2);
            countIndexOf1 = countIndex1 + 1;
            countIndexOf2 = countIndex2 + 1;
            arrIndex.push(countIndex1);
            arrIndex.push(countIndex2);
        }
    }
    for (let i = 0; i < arrIndex.length; i = i + 2) {
        if (arrIndex[i] > arrIndex[i + 1]) countFalse++;
    }
    if (count1 === count2 && !!value && countFalse===0) return true;
    else return false;
}
module.exports = parentheses;