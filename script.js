// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Event Handling
    const clickBtn = document.getElementById('clickBtn');
    const hoverBox = document.getElementById('hoverBox');
    const keyDisplay = document.getElementById('keyDisplay');
    const secretBox = document.getElementById('secretBox');

    // Button click
    clickBtn.addEventListener('click', () => {
        alert('Button clicked! 🎉');
    });

    // Hover effects
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = '#c8e6c9';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '#f0f0f0';
    });

    // Keypress detection
    document.addEventListener('keydown', (e) => {
        keyDisplay.textContent = `Last Key Pressed: ${e.key}`;
    });

    // Secret double-click
    secretBox.addEventListener('dblclick', () => {
        secretBox.textContent = '🎉 Secret Revealed!';
        setTimeout(() => secretBox.textContent = 'Double-click me 👀', 2000);
    });

    // Interactive Elements
    const colorChanger = document.getElementById('colorChanger');
    let colorIndex = 0;
    const colors = ['#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];

    colorChanger.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorChanger.style.backgroundColor = colors[colorIndex];
    });

    // Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const showSlide = (n) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex = (n + slides.length) % slides.length;
        slides[slideIndex].classList.add('active');
    };

    document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));
    document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));
    showSlide(0);

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validationForm');
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        password: document.getElementById('password')
    };

    const validateField = (field, value) => {
        const error = field.parentElement.querySelector('.error-message');
        let isValid = true;

        if (field.required && !value.trim()) {
            error.textContent = 'This field is required';
            isValid = false;
        } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error.textContent = 'Invalid email format';
            isValid = false;
        } else if (field.type === 'password' && value.length < 8) {
            error.textContent = 'Password must be at least 8 characters';
            isValid = false;
        } else {
            error.textContent = '';
        }

        return isValid;
    };

    // Real-time validation
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', (e) => {
            validateField(e.target, e.target.value);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formValid = true;

        Object.entries(inputs).forEach(([key, field]) => {
            if (!validateField(field, field.value)) formValid = false;
        });

        if (formValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Show secret box after 5 seconds
    setTimeout(() => secretBox.style.display = 'block', 5000);
});
