const putYourName = document.getElementById('putYourName');
const putYourImage = document.getElementById('putYourImage');
const putYourComment = document.getElementById('putYourComment');
const sentButton = document.getElementById('sentButton');
const yourImage = document.getElementById('yourImage');
const yourName = document.getElementById('yourName');
const yourMessage = document.getElementById('yourMessage');

function sentMessage() {
    yourImage.src = putYourImage.value;
    const nameText = putYourName.value;
    const trimmedName = nameText.trim()
    yourName.innerHTML = trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase();
    const messageText = putYourComment.value;
    const checkSpam1 = messageText.replace(/viagra/gi, '***');
    const checkSpam2 = checkSpam1.replace(/XXX/gi, '***');
    yourMessage.innerHTML = checkSpam2;
    putYourName.value = "";
    putYourImage.value = "";
    putYourComment.value = "";
};
