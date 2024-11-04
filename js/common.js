

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