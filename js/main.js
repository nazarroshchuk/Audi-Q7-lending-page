$(function () {
    $(".slider").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000,
    });

    $('.header-btn').on('click', function () {
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
    })
});

const openPopupButton = document.getElementById('popupOpen');
const popupWindow = document.querySelector('.popup');
const closeButton = document.querySelector('.close');
const footerBtn = document.querySelector('.footer-btn');

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWindow.style.display = 'block';
})
footerBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWindow.style.display = 'block';
})

closeButton.addEventListener('click', function () {
    popupWindow.style.display = 'none';
})


