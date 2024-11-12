

// 서브페이지 공통 헤더 / 푸터 불러오기
document.addEventListener("DOMContentLoaded", function () {
    fetch("../header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("../footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
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


// slider
var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween : 20, // 슬라이드간 간격
    loop : true, // 무한 반복
    autoplay: { //자동슬라이드 (false-비활성화)
        delay: 2600, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },        
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}



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