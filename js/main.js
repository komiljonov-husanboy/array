var elInp1 = document.getElementById('inp__1');
var elInp2 = document.getElementById('inp__2');
var arr = ['olma', 'nok', 'anor'];
var elText = document.querySelector('.text');

function add() {
    if (elInp2.value === 'boshi') {
        arr.unshift(elInp1.value);
        console.log(arr);
    } else {
        arr.push(elInp1.value);
        console.log(arr);
    }
    elText.textContent = arr;
}

function del() {
    if (elInp2.value === 'oxiri') {
        arr.pop();
        console.log(arr);
    } else {
        arr.shift();
        console.log(arr);
    }
    elText.textContent = arr;
}


function youtubeChannel() {
    var videoName = document.getElementById("channelInput").value;
    var url = `https://youtube.com/results?search_query=${videoName}`;
    window.location.href = url;
}
function googleSearch() {
    var searchQuery = document.getElementById("searchInput").value;
    var url = `https://www.google.com/search?q=${searchQuery}`;
    window.open(url, '_blank');
}


function image() {
    var imageUrl = document.querySelector(".image").value;
    var imgElement = document.querySelector(".img");
    imgElement.src = imageUrl;
}