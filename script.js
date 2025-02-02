// التوجيه إلى صفحة تسجيل الدخول عند الضغط على أي من مواقع التواصل
document.querySelectorAll(".social-item").forEach(item => {
    item.addEventListener("click", function() {
        window.location.href = "login.html";
    });
});

// إظهار رسالة عند الضغط على زر "شراء" أو "مجاني" بدلاً من التوجيه
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("سجل دخول أولاً قبل إتمام العملية!");
    });
});
