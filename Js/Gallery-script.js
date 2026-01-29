document.addEventListener('DOMContentLoaded', () => {
    const galleryCarousel = document.getElementById('gallery-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    const images = [
        "Images/Gallery/g14.jpg",
        "Images/Gallery/g16.jpg",
        "Images/Gallery/g17.jpg",
        "Images/Gallery/g18.jpg",
        "Images/Gallery/g11.jpg",
        "Images/Gallery/g12.jpg",
        "Images/Gallery/g13.jpg",
        "Images/Gallery/g10.jpg",
        "Images/Gallery/g9.jpg",
        "Images/Gallery/g8.jpg",
        "Images/Gallery/g7.jpg",
        "Images/Gallery/g6.jpg",
        "Images/Gallery/g5.jpg",
        "Images/Gallery/g4.jpg",
        "Images/Gallery/g3.jpg",
        "Images/Gallery/g2.jpg",
        "Images/Gallery/g1.jpg",
        "Images/Gallery/2 ABVSME.jpg",
        "Images/Gallery/3 ABVSME.jpg",
        "Images/Gallery/4 ABVSME.jpg",
        "Images/Gallery/5 ABVSME.jpg",
    ];

    images.forEach((src, index) => {
        const link = document.createElement('a');
        link.className = "flex-shrink-0 w-full md:w-1/2 lg:w-1/4 snap-start p-2 cursor-pointer";

        const img = document.createElement('img');
        if (index >= 4) {
            img.loading = "lazy";
        }
        img.src = src;
        img.alt = "Gallery Image";
        img.className = "w-full h-64 object-cover rounded-lg shadow-md hover:opacity-80 transition-all";

        img.onload = () => {
            img.classList.add('loaded');
        };
        if (img.complete) {
            img.classList.add('loaded');
        }

        link.appendChild(img);
        galleryCarousel.appendChild(link);

        link.addEventListener('click', (event) => {
            event.preventDefault();
            modalImage.src = src;
            imageModal.classList.remove('hidden');
        });
    });

    const closeModal = () => {
        imageModal.classList.add('hidden');
    };

    modalCloseBtn.addEventListener('click', closeModal);
    imageModal.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            closeModal();
        }
    });

    const scrollAmount = () => {
        return galleryCarousel.clientWidth;
    };

    nextBtn.addEventListener('click', () => {
        galleryCarousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        galleryCarousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
});
