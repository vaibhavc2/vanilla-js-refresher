body.classList.add("bg-gray-900", "text-gray-100", "m-10");

const buttons = document.getElementsByClassName("tab-btn");

buttons[0].classList.add("font-bold", "text-lg");
buttons[1].classList.add("font-bold", "text-lg");
buttons[2].classList.add("font-bold", "text-lg");

const heading = document.getElementById("heading");
heading.classList.add(
  "text-2xl",
  "font-bold",
  "underline",
  "underline-offset-4"
);

const img = document.getElementById("h-img");
img.classList.add("rounded-md", "obtain", "w-16");
