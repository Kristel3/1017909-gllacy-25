var link = document.querySelector(".button.button-feedback");

var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
List.add("modal-show"); evt.preventDefault();
popup.class
link.onclick = function() {
popup.style.display = "block";
}
  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
};

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value) {
    evt.preventDefault();
    console.name("Нужно ввести имя и адрес почты");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("mail", mail.value);
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})})
