document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    hamburger.addEventListener('click', () => nav.classList.toggle('active'));

    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    const progressBars = document.querySelectorAll('.progress');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            progressBars.forEach(bar => bar.style.width = bar.getAttribute('data-width'));
        }
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? 'block' : 'none';
            });
        });
    });

    const testimonialsData = [
        { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", text: "მარიამი არის ძალიან ნიჭიერი სტუდენტი.", name: "ლექტორი", role: "Smart Academy" },
        { img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png", text: "შესანიშნავი კოდის სტრუქტურა!", name: "ანა ბერიძე", role: "Project Manager" },
        { img: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png", text: "ძლიერი ტექნიკური უნარები.", name: "ლუკა", role: "Senior Developer" },
        { img: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png", text: "დიდი პოტენციალი კარიერული ზრდისთვის.", name: "მენეჯერი", role: "Smart Academy" }
    ];

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            document.getElementById('test-img').src = testimonialsData[index].img;
            document.getElementById('test-text').textContent = testimonialsData[index].text;
            document.getElementById('test-name').textContent = testimonialsData[index].name;
            document.getElementById('test-role').textContent = testimonialsData[index].role;
        });
    });

    document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({ name: 'test', email: 'test@test.com' })
        });
        if (response.ok) document.getElementById('success-modal').style.display = 'flex';
    });
    
    document.querySelector('.close-modal').addEventListener('click', () => document.getElementById('success-modal').style.display = 'none');
});