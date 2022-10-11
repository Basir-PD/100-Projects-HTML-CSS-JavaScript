const selected = document.querySelector('.selected')
const options = document.querySelector('.options')
const optionList = document.querySelectorAll('.option')

selected.addEventListener('click', () => {
    options.classList.toggle('active')
})

optionList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('span').innerText
         options.classList.remove("active")
    })
})