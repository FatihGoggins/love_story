const playButton = document.querySelector(".btn");
const audio = document.querySelector("#backgroundAudio");

playButton.addEventListener("click", function (e) {
	e.preventDefault();
	audio.play();
});
