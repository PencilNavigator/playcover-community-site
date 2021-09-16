document.addEventListener("DOMContentLoaded", function(){
    const replacers = document.querySelectorAll('[data-replace]');
    for(let i=0; i<replacers.length; i++){
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function(key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
        });
    }
});