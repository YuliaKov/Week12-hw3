const putYourName = document.getElementById('putYourName');
const putYourImage = document.getElementById('putYourImage');
const putYourComment = document.getElementById('putYourComment');
const sentButton = document.getElementById('sentButton');
const yourImage = document.getElementById('yourImage');
const yourName = document.getElementById('yourName');
const yourMessage = document.getElementById('yourMessage');
const messageDate = document.getElementById('messageDate');
const yesRadio = document.getElementById('yes');
const noRadio = document.getElementById('no');
const radioMessage = document.getElementById('radioMessage');

function sentMessage() {
    const nameText = putYourName.value;
    const trimmedName = nameText.trim()
    if (yesRadio.checked) {
        yourName.innerHTML = trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase();
    } else if (noRadio.checked) {
        yourName.innerHTML = "Username";
    } else {
        radioMessage.textContent = "Выберите один из вариантов"
        return;
    }
    const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg", "/images/img5.jpg"];
    const randomIndex = Math.floor(Math.random()*images.length);
    const randomImage = images[randomIndex];
    if (putYourImage.value === "") {
        yourImage.src = randomImage;
    } else {
        yourImage.src = putYourImage.value;
    }
    const messageText = putYourComment.value;
    const checkSpam1 = messageText.replace(/viagra/gi, '***');
    const checkSpam2 = checkSpam1.replace(/XXX/gi, '***');
    yourMessage.innerHTML = checkSpam2;
    const dateOfMessage = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: false };
    const date = dateOfMessage.toLocaleDateString(undefined, dateOptions);
    const time = dateOfMessage.toLocaleTimeString(undefined, timeOptions);
    messageDate.textContent = `Отправлено ${date} в ${time}`;
    putYourName.value = "";
    putYourImage.value = "";
    putYourComment.value = "";
    radioMessage.textContent  = "";
    yesRadio.checked = false;
    noRadio.checked = false;
};
