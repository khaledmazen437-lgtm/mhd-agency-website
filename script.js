VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

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

const whatsappForm = document.getElementById('whatsappForm');

if(whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const phoneNumber = "201226935593";

        const text = `سلام عليكم يا هندسة، أنا مهتم بخدماتك.

👤 *الاسم:* ${name}
📧 *الإيميل:* ${email}

📝 *تفاصيل الرسالة:*
${message}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });
}
