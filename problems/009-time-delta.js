/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let xSum = 0;
    let ySum = 0;
    let xChange = x.split(":");
    let yChange = y.split(":");
    xSum = xChange[0] * 3600 + xChange[1] * 60 + Number(xChange[2]);
    ySum = yChange[0] * 3600 + yChange[1] * 60 + Number(yChange[2]);
    return(ySum - xSum);
}
module.exports = getTimeDelta;
