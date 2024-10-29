



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

