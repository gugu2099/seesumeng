

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


// 헤더 카테고리 tab start
// document.addEventListener("DOMContentLoaded", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const tabName = urlParams.get('tab'); // URL에서 'tab' 파라미터 값을 가져옵니다.

//     if (tabName) {
//         const targetTabLink = document.getElementById(`${tabName}-tab`); // 해당 탭 버튼을 찾습니다.
//         const targetTabPane = document.getElementById(`${tabName}-tab-pane`); // 해당 탭 콘텐츠를 찾습니다.
        
//         // 해당 탭 링크와 콘텐츠가 존재하면 활성화
//         if (targetTabLink && targetTabPane) {
//             // 모든 탭 링크 비활성화
//             document.querySelectorAll("#myTab .nav-link").forEach(link => link.classList.remove("active"));
//             // 모든 탭 콘텐츠 숨기기
//             document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("show", "active"));
            
//             // 해당 탭 버튼과 콘텐츠 활성화
//             targetTabLink.classList.add("active");
//             targetTabPane.classList.add("show", "active");
//         } else {
//             console.error(`Tab ${tabName} elements not found.`); // 해당 탭이 없을 경우 에러 출력
//         }
//     }
// });
// 헤더 카테고리 tab start


// Header 불러오기
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Error loading header:', error));

// Footer 불러오기
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Error loading footer:', error));




    // fetch('https://gugu2099.github.io/seesumeng/header.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('header').innerHTML = data;
//     })
//     .catch(error => console.log('Error loading header:', error));

// fetch('https://gugu2099.github.io/seesumeng/footer.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('header').innerHTML = data;
//     })
//     .catch(error => console.log('Error loading header:', error));




// 과거 헤더푸터 가져오기
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