const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
        link.classList.add('active');
    }
});
