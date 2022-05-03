function btnSubmit(event) {
    event.preventDefault();
}
window.onload = function () {
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', btnSubmit) 
};