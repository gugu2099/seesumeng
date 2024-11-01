



// Header 불러오기
fetch('../header.html')  // 상위 폴더로 이동하여 'header.html' 파일 불러옴
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Error loading header:', error));

// Footer 불러오기
fetch('../footer.html')  // 상위 폴더로 이동하여 'footer.html' 파일 불러옴
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Error loading footer:', error));


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

