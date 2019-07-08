var link = document.querySelector(".button-feedback");

var bk_overlay = document.querySelector(".overlay")
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");

var form = popup.querySelector("form");
var nameEl = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("Elname");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  bk_overlay.classList.add("modal-show");

  if (storage) {
    Elname.value = storage;
    mail.value = storage;
    comment.focus();
  } else {
    Elname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  bk_overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!Elname.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("Elname", Elname.value);
      localStorage.setItem("mail", mail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      bk_overlay.classList.contains("overlay");
      bk_overlay.classList.remove("overlay");

    }
  }
})
