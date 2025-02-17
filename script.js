const orange = document.getElementById("orange");
const apple = document.getElementById("apple");
const orangeText = document.getElementById("orangeText");
const appleText = document.getElementById("appleText");

document.getElementById("button").addEventListener("click", function() {
    const tempSrc = orange.src;
    orange.src = apple.src;
    apple.src = tempSrc;

    const tempText = appleText.textContent;
    appleText.textContent = orangeText.textContent;
    orangeText.textContent = tempText;

    const tempColor = getComputedStyle(appleText).color;
    appleText.style.color = getComputedStyle(orangeText).color;
    orangeText.style.color = tempColor;
})