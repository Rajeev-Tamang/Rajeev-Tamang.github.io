// Mobile Menu Toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// Typed.js Animation for Multi-Text
const typed = new Typed('.multi-text', {
    strings: ['Network Engineer.', 'Programmer.', 'Security Enthusiast.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});

// Gallery Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;

    // Open modal when gallery item is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            openModal(this);
        });
    });

    function openModal(item) {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.overlay');
        const title = overlay.querySelector('h3').textContent;
        const description = overlay.querySelector('p').textContent;

        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Close modal when clicking outside the image
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    // Previous image
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openModal(galleryItems[currentIndex]);
        }
    }

    // Next image
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openModal(galleryItems[currentIndex]);
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
});