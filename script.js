// Nav link highlighting
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.header-main-nav ul li a');
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-main-nav');

    // Highlight the current page on load
    highlightCurrentPage(navLinks);

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove selected class from all links
            navLinks.forEach(l => l.classList.remove('selected'));

            // Add selected class to clicked link
            this.classList.add('selected');
            headerNav.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    menuToggle.addEventListener('click', function () {
        const isOpen = headerNav.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            headerNav.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.querySelector('.sr-only').textContent = 'Open menu';
        }
    });
});

// Function to highlight the current page
function highlightCurrentPage(navLinks) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('selected');
        }
    });
}

function updateCount(button, change) {
    const count = button.parentElement.querySelector('.count1');
    const currentCount = Number(count.textContent);
    count.textContent = Math.max(0, currentCount + change);
}

function increaseCount(button) {
    updateCount(button, 1);
}

function decreaseCount(button) {
    updateCount(button, -1);
}












































































