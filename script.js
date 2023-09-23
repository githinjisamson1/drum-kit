function playSoundEventHandler(e) {
  // grab the associated audio element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //   stop function
  if (!audio) return;

  //   rewind to start, allows for multiple hits
  audio.currentTime = 0;

  //   play
  audio.play();

  //   attach playing class on key pressed
  key.classList.add("playing");
}

window.addEventListener("keydown", playSoundEventHandler);

// grab all divs with key id
const keys = document.querySelectorAll(".key"); //NodeList
function removeTransitionEventHandler(e) {
  // stop handler
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing"); //refers to key
}

// remove transition per key
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransitionEventHandler);
});
