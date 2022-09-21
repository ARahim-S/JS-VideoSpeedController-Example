const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
  console.log(e);
  console.dir(speed);
  const y = e.pageY - this.offsetTop;
  const percentage = y / this.offsetHeight;
  console.log(percentage);
  const min = 0.4;
  const max = 4;
  const height = Math.round(percentage * 100) + "%";
  const playbackRate = percentage * (max - min) + min;
  console.log(height);
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
