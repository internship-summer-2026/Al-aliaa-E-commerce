const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    // التأكد من إدخال البيانات
    if (!name || !email || !phone || !message) {

        alert("من فضلك املأ جميع البيانات.");

        return;
    }


    // التحقق من الإيميل
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("من فضلك أدخل بريد إلكتروني صحيح.");

        return;
    }


    // نجاح الإرسال
    alert("تم إرسال رسالتك بنجاح ❤️");


    // تفريغ الفورم
    contactForm.reset();

});