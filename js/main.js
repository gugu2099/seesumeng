

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


// Header 불러오기
fetch('header.html')  // 'header.html' 파일을 불러옴
    .then(response => response.text())  // 응답을 텍스트로 변환
    .then(data => {
        document.getElementById('header').innerHTML = data;  // 'header' div에 삽입
    })
    .catch(error => console.log('Error loading header:', error));

// Footer 불러오기
fetch('footer.html')  // 'footer.html' 파일을 불러옴
    .then(response => response.text())  // 응답을 텍스트로 변환
    .then(data => {
        document.getElementById('footer').innerHTML = data;  // 'footer' div에 삽입
    })
    .catch(error => console.log('Error loading footer:', error));


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