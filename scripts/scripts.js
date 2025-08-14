const html = document.querySelector('html')
const changeMode = document.querySelector('.changeMode')

// Look for oremosWebisiteMode in localStorage
if (localStorage.getItem('oremosWebisiteMode') === null) {
    localStorage.setItem('oremosWebisiteMode', "false")
}

checkStatus()

function checkStatus() {
    if (localStorage.getItem('oremosWebisiteMode') === "true") {
        html.classList.add('dark-mode')
        changeMode.classList.remove('dark-icon')
    } else {
        html.classList.remove('dark-mode')
        changeMode.classList.add('dark-icon')
    }
}

changeMode.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
    if (localStorage.getItem('oremosWebisiteMode') === "true") {
        localStorage.setItem('oremosWebisiteMode', "false")
    } else {
        localStorage.setItem('oremosWebisiteMode', "true")
    }
    changeMode.classList.toggle('dark-icon')
})


