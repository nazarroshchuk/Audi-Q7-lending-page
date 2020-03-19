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
});

footerBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWindow.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    popupWindow.style.display = 'none';
});

document.addEventListener('click', function (evt) {
    if (evt.target === popupWindow) {
        popupWindow.style.display = 'none';
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        popupWindow.style.display = 'none';
    }
});

//Validation Form inputs
// function validationForm() {
//     var inputName = document.getElementById('fname');
//     if (inputName.value === '') {
//         inputName.placeholder = '*Invalid type';
//         inputName.classList.add('invalid-color');
//     }
//     var inputLastName = document.getElementById('lname');
//     if (inputLastName.value === '') {
//         inputLastName.placeholder = '*Invalide type';
//         inputLastName.classList.add('invalid-color');
//         return console.log(inputLastName);
//     }

// }

function checkEmtpyValue(inputForCheck, textValid, nameOfclass) {
    if (inputForCheck.value === '') {
        inputForCheck.placeholder = textValid;
        inputForCheck.classList.add(nameOfclass);
    }
}
function validationForm() {
    var inputName = document.getElementById('fname');
    var inputLastName = document.getElementById('lname');
    var inputTel = document.getElementById('tel');
    checkEmtpyValue(inputName, '*Invalide type', 'invalid-color');
    checkEmtpyValue(inputLastName, '*Invalide type', 'invalid-color');
    // var str = inputTel.value.toString();
    // if (str.lenght <= 14) {
    //     checkEmtpyValue(inputTel, '*Invalide type', 'invalid-color');
    // }
    // console.log(inputTel.value.typeof());
}

var submitFormBtn = document.getElementById('submitBtnForm');
submitFormBtn.addEventListener('click', validationForm);
