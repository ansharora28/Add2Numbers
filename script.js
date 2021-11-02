function add() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a + b))
    document.getElementById("answer").value = a + b
    document.getElementById("ans").style.display = "block"
}
<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>