const toggleBtn = (ev) => {
  ev.preventDefault();
  console.log("I am here");
  document.getElementById("toggleFor").classList.toggle("hidden");
};

document.getElementById("btn").addEventListener("click", toggleBtn);
