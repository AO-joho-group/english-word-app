const home = document.getElementById("home");
const study = document.getElementById("study");

document.getElementById("startBtn").onclick = () => {
  home.style.display = "none";
  study.style.display = "block";
};

document.getElementById("backBtn").onclick = () => {
  study.style.display = "none";
  home.style.display = "block";
};
