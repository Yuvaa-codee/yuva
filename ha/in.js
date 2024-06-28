document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', event => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', event => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

window.onclick = event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

document.querySelectorAll('.content-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        const contentId = event.target.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
    });
});
