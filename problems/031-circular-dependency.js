/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {
    let count=0;
let countTrue=0;
let newArr = [];
for (let key in servicesMap) {
    newArr.push(servicesMap[key]);
}
let flatArr = newArr.flat(1)
for (let key in servicesMap){
    count++;
    for (let items of flatArr){
        if (items===key){
            countTrue++;
            break;
        }
    }
}
return (count===countTrue && count>0) ? true : false
// if (count===countTrue && count>0) return true;
// else return false;
}

module.exports = hasCircularDependency;