Array.prototype.myFilter = function (func, thisArg) {
    let i,
        length = this.length,
        result = [];
    for (i = 0; i < length; i++) {
        if (func.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
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