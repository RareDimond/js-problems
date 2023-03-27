/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    let newArr=date.split(".");
    let buffer = newArr[0];
    newArr[0]=newArr[1];
    newArr[1]=buffer;
    let dateChanged=newArr.join(".");
    let transDate = new Date(dateChanged);
    let zeroDay='0';
    let zeroMonth='0';
    transDate.setDate(transDate.getDate() + 14);
    if (transDate.getMonth()+1>=10) zeroMonth="";
    if (transDate.getDate()>=10) zeroDay="";
    return(`${zeroDay}${transDate.getDate()}.${zeroMonth}${transDate.getMonth()+1}.${transDate.getFullYear()}`);
}
module.exports = vacation;