Array.prototype.myFilter = function (arr, func, thisArg) {
    let i,
        length = arr.length,
        result = [];
    for (i = 0; i < length; i++) {
        if (func.call(thisArg, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

function createDebounceFunction(func, wait, immediate = false) {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}