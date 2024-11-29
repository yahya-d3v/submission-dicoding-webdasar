let slideIndex = 0;

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-image");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "none";

      setTimeout(showSlides, 2000); // Change image every 2 seconds   

    }

    showSlides();   
