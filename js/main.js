

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



    document.addEventListener("DOMContentLoaded", function() {
        // URL 파라미터로 탭 활성화
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("tab")) {
            const tabName = urlParams.get("tab");
            activateTab(tabName);
        }
    
        // 헤더의 모든 카테고리 링크에 이벤트 추가
        const headerLinks = document.querySelectorAll(".header .project a"); // 헤더 링크 선택
        headerLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const tabName = link.getAttribute("data-tab"); // data-tab 속성에서 탭 이름 가져오기
                window.location.href = `${window.location.pathname}?tab=${tabName}`;
            });
        });
    });
    
    // 탭 활성화 함수
    function activateTab(tabName) {
        const allTabs = document.querySelectorAll(".tab"); // 모든 탭 요소 선택
        allTabs.forEach(tab => {
            tab.classList.toggle("active", tab.getAttribute("data-tab") === tabName); // 해당 탭 활성화
        });
    }


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