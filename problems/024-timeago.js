/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    let time="";
    if (seconds >= 0 && seconds <= 9) {
        return "just now";
    } else if (seconds >= 10 && seconds <= 59) {
        return `${Math.floor(seconds / 10) * 10} seconds ago`;
    } 
    else if (seconds >= 60 && seconds < 1800) {
        if(seconds >= 60 && seconds <= 119) time="minute";
        else time = 'minutes';
        return `${Math.floor(seconds / 60)} ${time} ago`;
    }
    else if (seconds >= 1800 && seconds <= 3599) {
        return '30 minutes ago';
    }
    else if (seconds >= 3600 && seconds <= 43199) {
        if(seconds >= 3600 && seconds <= 7199) time="hour";
        else time = 'hours';
        return `${Math.floor(seconds / 3600)} ${time} ago`;
    }
    else if (seconds >= 43200 && seconds <= 86399) {
        return `12 hours ago`;
    }
    else if (seconds >= 86400 && seconds <= 172799) {
        return `1 day ago`;
    }
    else if (seconds >= 172799 && seconds <= 604799) {
        return `a few days ago`;
    }
    else if (seconds >= 604800 && seconds <= 2419199) {
        if(seconds >= 604800 && seconds <= 1209599) time="week";
        else time = 'weeks';
        return `${Math.floor(seconds / 604800)} ${time} ago`;
    }
    else return 'undefined';
}
module.exports = timeago;