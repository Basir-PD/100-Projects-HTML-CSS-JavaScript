const btns = document.querySelectorAll('.btn');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActive();
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

const removeActive = () => {
    btns.forEach(btn => btn.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {
    if (!e.target.matches('.btn')) {
        removeActive()
    }
}