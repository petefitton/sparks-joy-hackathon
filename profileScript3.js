// Source: https://stackoverflow.com/questions/38627822/increase-the-font-size-with-a-click-of-a-button-using-only-javascript
function increaseFontSize(increaseFactor) {
    // txt = document.getElementById('b');
    textGrp = document.querySelectorAll('p')
    for (textNode of textGrp) {
        style = window.getComputedStyle(textNode, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        textNode.style.fontSize = (currentSize + increaseFactor) + 'px';
    }
}

function scrollUp() {
    window.scrollBy(0, -100);
}

function scrollDown() {
    window.scrollBy(0, 100);
}

function toNext2() {
    document.getElementById("next1").style.display = "none"
    document.getElementById("next2").style.display = "block"
    document.getElementById("tutorial1Img").style.display = "none"
    document.getElementById("tutorial2Img").style.display = "block"
}

function toNext3() {
    document.getElementById("next2").style.display = "none"
    document.getElementById("next3").style.display = "block"
    document.getElementById("tutorial2Img").style.display = "none"
    document.getElementById("tutorial3Img").style.display = "block"
}

function toNext4() {
    document.getElementById("next3").style.display = "none"
    document.getElementById("next4").style.display = "block"
    document.getElementById("tutorial3Img").style.display = "none"
    document.getElementById("tutorial4Img").style.display = "block"
}

function toNext5() {
    document.getElementById("next4").style.display = "none"
    document.getElementById("next5").style.display = "block"
    document.getElementById("tutorial4Img").style.display = "none"
    document.getElementById("tutorial5Img").style.display = "block"
}

function toFinish() {
    // document.getElementById("next2").style.display = "none"
    // document.getElementById("next3").style.display = "block"
    // document.getElementById("tutorial2Img").style.display = "none"
    // document.getElementById("tutorial3Img").style.display = "block"
    document.getElementById("myModal2").style.display = "none"
}