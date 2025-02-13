function openModal(title, text, imageSrc, videoSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;

    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');

    if (imageSrc) {
        modalImage.src = imageSrc;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    if (videoSrc) {
        modalVideo.innerHTML = `<iframe width="450" height="315" src="https://www.youtube.com/embed/HD13eq_Pmp8?si=TNZ5JQpqKRHL2bAJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        modalVideo.innerHTML = '';
    }

    var modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
}
