window.addEventListener('click', (event) => {
    if(event.target.dataset.spoiler === 'open-spoiler'){
        const spoilerMenu = event.target.querySelector('.menu-spoiler__menu');
        const spoilerName = event.target.querySelector('.menu-spoiler__name');

        spoilerMenu.classList.toggle('spoiler-menu-active');
        spoilerName.classList.toggle('spoiler-active');
    }
});

const info = document.querySelector('.head-row__top');
const show = document.querySelector('.show-info');
const hide = document.querySelector('.hide-info');

show.addEventListener('click', () => {
    info.classList.toggle('none');
    show.classList.toggle('none');
    hide.classList.toggle('none');
});

hide.addEventListener('click', () => {
    info.classList.toggle('none');
    show.classList.toggle('none');
    hide.classList.toggle('none');
})