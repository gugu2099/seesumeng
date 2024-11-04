

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
// Function to activate tab based on URL parameters
function activateTabFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const tabName = urlParams.get('tab');

    if (tabName) {
        activateTab(tabName);
    }
}

// Tab activation function
function activateTab(tabName) {
    const tabContent = document.querySelectorAll(".tab-pane");
    const tabLinks = document.querySelectorAll("#myTab .nav-link");

    // Hide all tab content
    tabContent.forEach(content => {
        content.classList.remove("show", "active");
        if (content.getAttribute("id") === `${tabName}-tab-pane`) {
            content.classList.add("show", "active");
        }
    });

    // Deactivate all tab links and activate the selected one
    tabLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("id") === `${tabName}-tab`) {
            link.classList.add("active");
        }
    });
}

// Optional: handle tab button click to ensure URL parameter updates
document.querySelectorAll('#myTab .nav-link').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('id').replace('-tab', '');
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('tab', tabName);
        window.history.pushState({}, '', newUrl);
    });
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