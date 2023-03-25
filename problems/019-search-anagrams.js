/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
let newArr = value.replace(/[.,?:;'"]/g, "").split(" ");
let count = 0;
let interimArr = [];
let interimArrSort = [];
let totalArr = [];
for (let i = 0; i < newArr.length; i++) {
    count++;
    for (j = count; j < newArr.length; j++) {
        if (
            newArr[i].toLowerCase().split("").sort().join("") ===
            newArr[j].toLowerCase().split("").sort().join("")
        ) {
            interimArr.push(i);
            interimArr.push(j);
        }
    }
}
interimArrSort = interimArr.sort();
for (items of interimArr) {
    totalArr.push(newArr[items]);
}
if (totalArr.length > 0) return totalArr.join(" ");
else return "";
}
module.exports = searchAnagrams;
