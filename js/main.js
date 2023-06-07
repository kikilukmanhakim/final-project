// Header Scroll
let nav = document.querySelector(".header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

function sendMail() {
  var name = document.getElementById("input_name").value;
  var email = document.getElementById("input_email").value;
  var emailDest = "kikilukmanhakim92@gmail.com";
  var subject = document.getElementById("input_subject").value;
  var message = document.getElementById("input_message").value;
  var link = "mailto:" + emailDest + "?subject=" + escape(subject) + "&body=" + escape(message +" regards: " + name + ", Mail Me at: " + email);
  window.open(link);
}

