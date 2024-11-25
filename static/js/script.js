// Show the scroll-to-top button when the user scrolls down
window.onscroll = function() {
    let scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Image hover effect above footer
const footerImage = document.querySelector(".bottom-right-image");

footerImage.addEventListener("mouseover", function() {
    footerImage.style.transform = "scale(1.1)";
    footerImage.style.transition = "transform 0.3s ease";
});

footerImage.addEventListener("mouseout", function() {
    footerImage.style.transform = "scale(1)";
});

