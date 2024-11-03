function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
  if ($("body").hasClass("sidenav-active")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
