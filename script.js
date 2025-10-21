const galleryThumbs = document.querySelectorAll('.gallery-item .main-thumb');

galleryThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const lightboxId = thumb.dataset.lightbox;
    const lightbox = document.getElementById(lightboxId);

    const images = lightbox.querySelectorAll('.lightbox-content img');
    if (images.length === 1) {
      lightbox.querySelector('.lightbox-content').style.gridTemplateColumns = '1fr';
    } else {
      lightbox.querySelector('.lightbox-content').style.gridTemplateColumns = 'repeat(2, 1fr)';
    }

    lightbox.style.display = 'flex';
  });
});

const allLightboxes = document.querySelectorAll('.lightbox');
allLightboxes.forEach(lb => {
  lb.addEventListener('click', (e) => {
    if (e.target === lb) {
      lb.style.display = 'none';
    }
  });
});
