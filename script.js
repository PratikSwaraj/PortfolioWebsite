document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var ul = document.querySelector(".right ul");

  toggleButton.addEventListener("click", function () {
    // Toggle the display of the ul list
    if (ul.style.display === "none" || ul.style.display === "") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });
});

document.getElementById("icongit").onclick = function () {
  window.location.href = "https://github.com/PratikSwaraj";
};

document.getElementById("iconlink").onclick = function () {
  window.location.href = "https://www.linkedin.com/in/pratik-swaraj-672a69127/";
};

document.getElementById("resume").onclick = function () {
  var pdfUrl =
    "https://drive.google.com/file/d/1vRM4G5aSYSdIqGfZEqxH-KZH1QixLXcl/view?usp=drive_link";
  window.open(pdfUrl, "_blank");
};

document.getElementById("bubble").onclick = function () {
  window.location.href = "https://bubble-game-black.vercel.app/";
};

document.getElementById("pf").onclick = function () {
  window.location.href = "https://portfolio-website-eight-tau-38.vercel.app/";
};

document.getElementById("qkart").onclick = function () {
  window.location.href = "https://pratikswaraj-qkart-frontend.vercel.app/";
};

document.getElementById("qtify").onclick = function () {
  window.location.href = "https://qtify-five-phi.vercel.app/";
};

document.getElementById("qtrip").onclick = function () {
  window.location.href = "https://qtripdynamic-pswaraj.netlify.app/";
};

document.getElementById("news").onclick = function () {
  window.location.href = "https://newsfeedswaraj.netlify.app/";
};
