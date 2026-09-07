// Nav link highlighting
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.header-main-nav ul li a');

    // Highlight the current page on load
    highlightCurrentPage(navLinks);

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove selected class from all links
            navLinks.forEach(l => l.classList.remove('selected'));

            // Add selected class to clicked link
            this.classList.add('selected');
        });
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












































































