

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
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tabName = urlParams.get("tab");

    if (tabName) {
        activateTab(tabName);
    }

    function activateTab(tabName) {
        const tabContent = document.querySelectorAll(".tab-pane");
        const tabLinks = document.querySelectorAll("#myTab .nav-link");

        // 모든 탭 콘텐츠 숨기기
        tabContent.forEach(content => {
            content.classList.remove("show", "active");
        });

        // 모든 탭 링크 비활성화
        tabLinks.forEach(link => {
            link.classList.remove("active");
        });

        // 선택된 탭 콘텐츠 및 링크 활성화
        const selectedTabContent = document.getElementById(`${tabName}-tab-pane`);
        const selectedTabLink = document.getElementById(`${tabName}-tab`);
        
        if (selectedTabContent && selectedTabLink) {
            selectedTabContent.classList.add("show", "active");
            selectedTabLink.classList.add("active");
        } else {
            console.error(`Tab with id ${tabName} not found.`);
        }
    }
});
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