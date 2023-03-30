/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let totalArr = secret.split("").map(function (elem) {
        return elem = (elem === " ") ? elem : (elem === "z")? "a" : String.fromCharCode(elem.charCodeAt() + 1);
    });
    return totalArr.join("");
}
module.exports = decrypt;

// function decrypt(secret) {
//     let newArr=secret.split("");
//     for (let i=0; i<newArr.length; i++){
//         if(newArr[i]=== " ");
//         else if (newArr[i]==="z") newArr[i]="a";
//         else {
//             let letterCode=newArr[i].charCodeAt() + 1;
//             let letter=String.fromCharCode(letterCode);
//             newArr[i]=letter
//         }
//     }
//     return(newArr.join(""));
//     }
    