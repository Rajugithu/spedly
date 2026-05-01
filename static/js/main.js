// main.js — students will add JavaScript here as features are built

// Video Modal
(function() {
    const modal = document.getElementById('videoModal');
    const trigger = document.querySelector('[data-modal-trigger]');
    const closeBtn = document.getElementById('modalClose');
    const videoFrame = document.getElementById('videoFrame');
    const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !trigger) return;

    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
        videoFrame.src = VIDEO_URL;
    });

    function closeModal() {
        modal.classList.remove('active');
        videoFrame.src = '';
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
