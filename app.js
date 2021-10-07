//ended up not using these ;_;
// const drumBoom = document.getElementById("boom");
// const drumClap = document.getElementById("clap");
// const drumHihat = document.getElementById("hihat");
// const drumKick = document.getElementById("kick");
// const drumOpenhat = document.getElementById("openhat");
// const drumRide = document.getElementById("ride");
// const drumSnare = document.getElementById("snare");
// const drumTink = document.getElementById("tink");
// const drumTom = document.getElementById("tom");

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
});

boomDiv.addEventListener("click", () => {
    boom.pause()
    boom.currentTime = 0
    boom.play();
});

clapDiv.addEventListener("click", () => {
    clap.pause()
    clap.currentTime = 0
    clap.play();
});

hihatDiv.addEventListener("click", () => {
    hihat.pause()
    hihat.currentTime = 0
    hihat.play();
});

kickDiv.addEventListener("click", () => {
    kick.pause()
    kick.currentTime = 0
    kick.play();
});

openhatDiv.addEventListener("click", () => {
    openhat.pause()
    openhat.currentTime = 0
    openhat.play();
});

rideDiv.addEventListener("click", () => {
    ride.pause()
    ride.currentTime = 0
    ride.play();
});

snareDiv.addEventListener("click", () => {
    snare.pause()
    snare.currentTime = 0
    snare.play();
});

tinkDiv.addEventListener("click", () => {
    tink.pause()
    tink.currentTime = 0
    tink.play();
});

tomDiv.addEventListener("click", () => {
    tom.pause()
    tom.currentTime = 0
    tom.play();
});