const el = (e) => {
    if (e.charAt(0) == '#') {
        return document.querySelector(e);
    }
    return document.querySelectorAll(e);
}

var input1 = el('.const')[0]
let input2 = el('.const')[1]

let buttons = el('.gridButton')
let persent;

buttons.forEach(element => {
    element.addEventListener('click', () => {
        persent = parseInt(element.dataset.persent);
        buttons.forEach(element => {
            element.classList.remove("active");
        });
        element.classList.add("active")
    })
});