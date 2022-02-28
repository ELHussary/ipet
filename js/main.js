// scroll to top
var splide = new Splide(".splide", {
  classes: {
    prev: "splide__arrow--prev bg-white w-12 h-12 p-2 rounded-full flex items-center shadow-md",
    next: "splide__arrow--next bg-white w-12 h-12 p-2 rounded-full flex items-center shadow-md",
  },
  type: "fade",
  perPage: 1,
});
var bar = splide.root.querySelector(".my-slider-progress-bar");
console.log(splide.perPage);
// Update the bar width:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  bar.style.width = String((100 * (splide.index + 1)) / end) + "%";
});
splide.mount();

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("back_to_top").classList.remove("hidden");
  } else {
    document.getElementById("back_to_top").classList.add("hidden");
  }
}
document.getElementById("back_to_top").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// navbar menu
document.getElementById("menu").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("myMenu").classList.toggle("hidden");
}

let appointment = document.getElementsByClassName("appointment");
let popup = document.getElementById("popup");
for (let i = 0; i < appointment.length; i++) {
  appointment[i].addEventListener("click", function () {
    popup.classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  });
}

document.getElementById("closepopup").onclick = function () {
  popup.classList.add("hidden");
  document.body.style.overflowY = "scroll";
};

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
