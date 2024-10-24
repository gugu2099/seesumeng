

fetch('header.html')  // 'header.html' 파일을 불러옴
.then(response => response.text())  // 응답을 텍스트로 변환
.then(data => {
    document.getElementById('header').innerHTML = data;  // 'header' div에 삽입
})
.catch(error => console.log('Error loading header:', error));

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

