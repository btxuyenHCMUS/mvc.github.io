const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        // Kiểm tra XMLHttpRequest object có thuộc tính
        // withCredentials hay không
        // Thuộc tính này chỉ có ở XMLHttpRequest2
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
        // Kiểm tra XDomainRequest
        // Đây là đối tượng chỉ có ở IE và
        // là cách để IE thực hiện truy vấn CORS
        xhr = new XDomainRequest();
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

const request = createCORSRequest('GET',
    'https://dc.vietstock.vn/api/CMSNews/GetTopViewedindex?topCount=5');
if (!request) {
    throw new Error('CORS is not supported');
}

request.onload = () => {
    var data = JSON.parse(request.responseText);
    console.log(data);
    // document.getElementById('popular-1').innerHTML = " \
    //     <div class='wi'>\
    //         <a href='index.html'><img src='images/works/img1.jpg' alt='' class='img-fluid'></a> \
    //     </div> \
    //     <div class='wb'><a href='#'>" + data['title'] + "</a> \
    //         <span class='post-date'>Jun 15, 2019</span></div>"
}
request.onerror = () => {
    console.log('Error');
}

request.send();

// var xhttp = createCORSRequest('GET', 'https://api.vietstock.vn/search/stock?q=sd&limit=10&languageID=1');
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// };
// xhttp.open("GET", "https://api.vietstock.vn/search/stock?q=sd&limit=10&languageID=1", true);
// xhttp.withCredentials = true;
// xhttp.setRequestHeader("Content-Type", "application/json");
// xhttp.setRequestHeader("")
// xhttp.send({
//     'request': "authentication token"
// });