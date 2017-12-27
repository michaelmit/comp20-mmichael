// on window load, call multuple funcs 
function addLoadEvent(func) {
    // if existing onload is a function, add to it Otherwise link new function
    prevOnload = window.onload;
    if (typeof window.onload != 'function') {

        window.onload = func;
    }
    else {
        // call all functions
        window.onload = function () {
        prevOnload();
        func();
        };
    }
}