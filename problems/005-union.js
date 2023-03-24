/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function union(a, b) {
    var unique1 = a.filter((x, i) => a.indexOf(x) === i);
    var unique2 = b.filter((x, i) => b.indexOf(x) === i);
    let new_arr = [];
    for (element_a of unique1) {
        for (element_b of unique2) {
            if (element_b == element_a) {
                new_arr.push(element_a);
            }
        }
    }
    new_arr.sort((a, b) => a - b);
    return(new_arr);
}

module.exports = union;
