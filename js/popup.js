// .our-service__popup
window.addEventListener('click', (event) => {


    if(event.target.dataset.action === 'open-popup'){
        const popupChild = event.target.querySelector(".our-service__popup");
        popupChild.classList.add('popup-open');

        const closeButton = popupChild.querySelector(".popup__close")

        closeButton.addEventListener("click", () => {
            popupChild.classList.remove('popup-open');
        })

        document.addEventListener('keydown', function(e) {
            if(e.code === 'Escape') {
                popupChild.classList.remove('popup-open');
            }
        });
    }

    if(event.target.dataset.action === 'close-popup'){
        event.target.classList.remove('popup-open');
    }
});

// .order__popup
window.addEventListener('click', (event) => {

    if(event.target.dataset.action === 'open-popupOrder'){
        const popupFather = event.target.closest(".order__slide");
        const popupOrder = popupFather.querySelector('.order__popup');
        const closeButton = popupOrder.querySelector('.popup__closeOrder');

        closeButton.addEventListener("click", () => {
            popupOrder.classList.remove('popup-openOrder');
        })

        popupOrder.classList.add('popup-openOrder');

        document.addEventListener('keydown', function(e) {
            if(e.code === 'Escape') {
                popupOrder.classList.remove('popup-openOrder');
            }
        });
    }

    if(event.target.dataset.action === 'close-popup'){
        event.target.classList.remove('popup-openOrder');
    }
});