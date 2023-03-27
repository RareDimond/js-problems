/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let countTrue1 = 0;
    let countTrue2 = 0;
    let countTrue3 = 0;
    let countIndexOf1 = 0;
    let countIndexOf2 = 0;
    let countIndexOf3 = 0;
    let countIndexOf4 = 0;
    let countIndexOf5 = 0;
    let countIndexOf6 = 0;
    let countIndex1 = 0;
    let countIndex2 = 0;
    let newArr = value.split("");
    let arrIndex = [];
    let countFalse = 0;
    newArr.forEach((element) => {
        if (element === "(") count1++;
        else if (element === ")") count2++;
        else if (element === "{") count3++;
        else if (element === "}") count4++;
        else if (element === "<") count5++;
        else if (element === ">") count6++;
    });
    if (count1 === count2 && !!value) {
        for (let i = 0; i < count1; i++) {
            countIndex1 = newArr.indexOf("(", countIndexOf1);
            countIndex2 = newArr.indexOf(")", countIndexOf2);
            countIndexOf1 = countIndex1 + 1;
            countIndexOf2 = countIndex2 + 1;
            arrIndex.push(countIndex1);
            arrIndex.push(countIndex2);
            countTrue1++;
        }
    }
    if (count3 === count4 && !!value) {
        for (let i = 0; i < count3; i++) {
            countIndex3 = newArr.indexOf("{", countIndexOf3);
            countIndex4 = newArr.indexOf("}", countIndexOf4);
            countIndexOf3 = countIndex3 + 1;
            countIndexOf4 = countIndex4 + 1;
            arrIndex.push(countIndex3);
            arrIndex.push(countIndex4);
            countTrue2++;
        }
    }
    if (count5 === count6 && !!value) {
        for (let i = 0; i < count5; i++) {
            countIndex5 = newArr.indexOf("<", countIndexOf5);
            countIndex6 = newArr.indexOf(">", countIndexOf6);
            countIndexOf5 = countIndex5 + 1;
            countIndexOf6 = countIndex6 + 1;
            arrIndex.push(countIndex5);
            arrIndex.push(countIndex6);
            countTrue3++;
        }
    }
    for (let i = 0; i < arrIndex.length; i = i + 2) {
        if (arrIndex[i] > arrIndex[i + 1]) countFalse++;
    }
    if (count1 != count2 || count3 != count4 || count5 != count6) return false;
    if (countTrue1 > 0 || countTrue2 > 0 || countTrue3 > 0) {
        if (count1 === count2 && !!value && countFalse === 0 && countTrue1 > 0)
            return true;
        if (count3 === count4 && !!value && countFalse === 0 && countTrue2 > 0)
            return true;
        if (count5 === count6 && !!value && countFalse === 0 && countTrue3 > 0)
            return true;
        if (countFalse > 0) return false;
    } else return false;
}

module.exports = parentheses;
