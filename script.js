const body = document.querySelector("body");
const btnLight = document.querySelector("#btn1");
const btnDark = document.querySelector("#btn2");
const modeText = document.getElementById("modeText"); // yangi div

btnLight.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  body.classList.remove("bg-[#1a202c]", "text-white");
  body.classList.add("bg-white", "text-black");

  modeText.innerHTML = `🟡 Siz <strong>Light</strong> moddasiz`;
});

btnDark.addEventListener("click", () => {
  body.style.backgroundColor = "#1a202c";
  body.style.color = "white";
  body.classList.remove("bg-white", "text-black");
  body.classList.add("bg-[#1a202c]", "text-white");

  modeText.innerHTML = `🌑 Siz <strong>Dark</strong> moddasiz`;
});
