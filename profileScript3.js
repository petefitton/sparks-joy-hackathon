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