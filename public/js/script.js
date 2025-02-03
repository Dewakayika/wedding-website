
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and stop videos
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        // Stop the video by removing autoplay
        let iframe = slides[i].querySelector("iframe");
        let src = iframe.getAttribute("src").replace("&autoplay=1", "");
        iframe.setAttribute("src", src);
    }

    // Show the current slide and start the video
    slides[slideIndex - 1].style.display = "block";
    let activeIframe = slides[slideIndex - 1].querySelector("iframe");

    // Add autoplay to the active video
    let activeSrc = activeIframe.getAttribute("src");
    if (!activeSrc.includes("autoplay=1")) {
        activeIframe.setAttribute("src", activeSrc + "&autoplay=1");
    }

    // Highlight the active thumbnail
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("opacity-100");
        dots[i].classList.add("opacity-60");
    }
    dots[slideIndex - 1].classList.add("opacity-100");
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
