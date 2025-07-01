// JavaScript Document

const videos = [
	 "gmbr/meme1.mp4",
	 "gmbr/meme2.mp4",
	 "gmbr/meme3.mp4",
	 "gmbr/meme4.mp4",
  	 "gmbr/meme5.mp4",
	"gmbr/meme6.mp4"
];

function triggerChaos() {
  const video = videos[Math.floor(Math.random() * videos.length)];
  const videoEl = document.getElementById("meme-video");
  const blocker = document.getElementById("overlay-blocker");

  // Block everything visually and functionally
  blocker.style.display = "block";
  document.body.classList.add("freeze-all");

  // Pause Swiper carousel (if it exists)
  if (typeof swiper !== "undefined") {
    swiper.autoplay?.stop?.();
  }

  // Optional: stop keyboard & scroll
  document.body.style.overflow = "hidden";

  videoEl.src = video;
  videoEl.style.display = "block";
  videoEl.play();

  // Optional shake effect
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 3000);

  videoEl.onended = () => {
    // Restore everything
    videoEl.style.display = "none";
    videoEl.src = "";
    blocker.style.display = "none";
    document.body.classList.remove("freeze-all");
    document.body.style.overflow = "";

    // Resume carousel autoplay
    if (typeof swiper !== "undefined") {
      swiper.autoplay?.start?.();
    }
  };
}

	
document.getElementById("meme-button").addEventListener("click", triggerChaos);
