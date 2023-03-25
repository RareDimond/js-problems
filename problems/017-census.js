/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let countAge = 0;
    let count = 0;
    list.forEach((element) => {
        if (element.age > countAge && element.gender==='Male') {
            countAge = element.age;
            count++;
        }
    });
    if (list.length > 1 && count>0) return count;
    return undefined;
}
// let a = [
//     { age: 12, gender: "Male" },
//     { age: 40, gender: "Male" },
// ];
// console.log(a.length);
// a.forEach(element => {
//     console.log(element.age);
// })
// for (item of a) {
//     console.log(item.age);
// }
module.exports = census;
