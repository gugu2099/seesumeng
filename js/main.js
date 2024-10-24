

// Main Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,
    effect: 'fade',
    loop : true, // 무한 반복
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// 헤더푸터 가져오기

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });



// 헤더푸터 가져오기

// window.addEventListener('load', function() {
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status == 200) {
//                     el.outerHTML = this.responseText;
//                 }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });
// });