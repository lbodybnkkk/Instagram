document.addEventListener("DOMContentLoaded", function () {

    let timeLeft = 20; // عدد الثواني للعد التنازلي

    const countdownElement = document.getElementById("countdown");

    const progressBar = document.getElementById("progress");

    const countdownInterval = setInterval(() => {

        timeLeft--;

        countdownElement.textContent = timeLeft;

        progressBar.style.width = (timeLeft / 20) * 100 + "%"; // تقليل العرض تدريجياً

        if (timeLeft <= 0) {

            clearInterval(countdownInterval);
        }

    }, 1000);

});