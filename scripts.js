let currentIndex = 0;
const images = [
    "dog.jpeg",
    "x.jpeg",
    "h.jpeg",
    "t.jpeg",
    "s.jpeg",
    "l.jpeg",
    "r.jpeg",
    "header.jpg",
    "j.jpeg",
    "w.jpeg",
    "ttt.jpeg",
    "kkk.jpeg"
];

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex];
    lightboxImg.style.transform = "scale(0.9)";
    setTimeout(() => {
        lightboxImg.style.transform = "scale(1)";
    }, 10);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
    currentIndex += n;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.style.transform = "scale(0.9)";
    setTimeout(() => {
        lightboxImg.src = images[currentIndex];
        lightboxImg.style.transform = "scale(1)";
    }, 300);
}
