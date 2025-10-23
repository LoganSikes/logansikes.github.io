// Open lightbox
const galleryThumbs = document.querySelectorAll('.gallery-item .main-thumb');

galleryThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const lightboxId = thumb.dataset.lightbox;
    const lightbox = document.getElementById(lightboxId);
    lightbox.style.display = 'flex';
  });
});

// Close lightbox by clicking background
const allLightboxes = document.querySelectorAll('.lightbox');
allLightboxes.forEach(lb => {
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.style.display = 'none';
  });
});

// Close button
const closeButtons = document.querySelectorAll('.lightbox-close');
closeButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.parentElement.style.display = 'none';
  });
});

// Escape key closes all
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    allLightboxes.forEach(lb => (lb.style.display = 'none'));
  }
});

// Carousel logic
document.querySelectorAll('.lightbox-content-image').forEach(section => {
  const images = section.querySelectorAll('img');
  const nextBtn = section.querySelector('.lightbox-image-next');
  const prevBtn = section.querySelector('.lightbox-image-prev');
  let current = 0;

  const downloadLink = section.parentElement.querySelector('#download-link')

  const showImage = index => {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');

    if(downloadLink) {
      downloadLink.href = images[index].src;
      downloadLink.download = images[index].src.split('/').pop();
    }
  };

  // Show first image initially
  showImage(current);

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    current = (current + 1) % images.length;
    showImage(current);
  });

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });
});
