/* =========================================
   1. تفعيل تأثير الـ 3D للكروت (Vanilla Tilt)
   ========================================= */
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,            // أقصى درجة ميلان
    speed: 400,         // سرعة الحركة
    glare: true,        // تشغيل لمعة الإضاءة
    "max-glare": 0.5,   // قوة اللمعة
});

/* =========================================
   2. تأثير ظهور العناصر عند السكرول (Scroll Reveal)
   ========================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // لو ظهر، ضيف كلاس show
        }
    });
});

// بنقول للمراقب يراقب كل العناصر اللي واخدة كلاس hidden
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* =========================================
   3. إرسال الفورم عبر واتساب (برقمك الشخصي)
   ========================================= */
const whatsappForm = document.getElementById('whatsappForm');

if(whatsappForm) { // تأكد إن الفورم موجود عشان ميديکش خطأ
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
    
        // 1. تجميع البيانات
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        // 2. رقم تليفونك
        const phoneNumber = "201226935593"; 
    
        // 3. نص الرسالة
        const text = `سلام عليكم يا هندسة، أنا مهتم بخدماتك.
        
👤 *الاسم:* ${name}
📧 *الإيميل:* ${email}
        
📝 *تفاصيل الرسالة:*
${message}`;
    
        // 4. فتح الرابط
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });
}