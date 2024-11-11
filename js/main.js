

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


// 헤더 카테고리 tab start
document.addEventListener("DOMContentLoaded", function() {
    // URL에서 tab 파라미터 읽기
    const urlParams = new URLSearchParams(window.location.search);
    const tabName = urlParams.get('tab');

    if (tabName) {
        activateTab(tabName);
    }

    // 탭 활성화 함수
    function activateTab(tabName) {
        const tabContent = document.querySelectorAll(".tab-pane");
        const tabLinks = document.querySelectorAll("#myTab .nav-link");

        // 모든 탭 콘텐츠 숨기기
        tabContent.forEach(content => {
            content.classList.remove("show", "active");
            if (content.getAttribute("id").startsWith(tabName)) {
                content.classList.add("show", "active");
            }
        });

        // 모든 탭 링크 비활성화 후, 해당 탭 활성화
        tabLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("id") === `${tabName}-tab`) {
                link.classList.add("active");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTab = urlParams.get("tab");
    if (selectedTab) {
        const tabButton = document.querySelector(`#${selectedTab}-tab`);
        if (tabButton) {
            tabButton.click();
        }
    }
});
// 헤더 카테고리 tab start


// topBtn start

// Top 버튼 요소 선택
var topButton = document.getElementById("topBtn");

// 스크롤 이벤트 감지
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    // 스크롤이 100px 이상 내려갔을 때 버튼 표시
    if (window.scrollY > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// 부드러운 스크롤 함수
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 부드러운 스크롤 옵션
    });
}

// topBtn end





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