//-------------------- nav bar-scrolling color--------------///

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//----------------login modal----------//

function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function closelogin() {
    document.getElementById("loginModal").style.display = "none";
}

//-----------------video-----------/

const videoPlayer = document.getElementById("videoPlayer");

const videos = [
    "./assests/videos/India-360-v2.mp4",
    "./assests/videos/Adventure.mp4",
    "./assests/videos/Heritage.mp4",
    "./assests/videos/Spiritual.mp4"
];

function changeVideo(index) {
    videoPlayer.src = videos[index];
    videoPlayer.play();
}

changeVideo(0);

const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? "🔇" : "🔊";
});

//*---------destination---------*//

var destinationSlider = new Swiper('.destination-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
    },


    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
