let index = 0;
        function moveSlide(step) {
            const images = document.getElementById("carouselImages");
            const total = images.children.length;
            index = (index + step + total) % total;
            images.style.transform = `translateX(-${index * 100}%)`;
        }