var writeFormLink = document.querySelector(".contacts-mail");
var writeFormModal = document.querySelector(".write-form");
var writeForm = writeFormModal.querySelector(".write");
var writeCloseButton = writeFormModal.querySelector(".modal-close");
var writeNameInput = writeFormModal.querySelector("[name=name]");
var writeEmailInput = writeFormModal.querySelector("[name=e-mail]");
var writeMessageInput = writeFormModal.querySelector("[name=message]");

var mapLink = document.querySelector(".contacts-map a");
var mapModal = document.querySelector(".modal-map");
var mapCloseButton = mapModal.querySelector(".modal-close");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

writeFormLink.addEventListener("click", function (event) {
  event.preventDefault();

  writeFormModal.classList.add("write-form-active");

  if ( storageName && storageEmail ) {
    writeNameInput.value = storageName;
    writeEmailInput.value = storageEmail;
    writeMessageInput.focus();
  } else {
    writeNameInput.focus();
  }
});

writeCloseButton.addEventListener("click", function (event) {
  event.preventDefault();

  writeFormModal.classList.remove("write-form-active");
  writeFormModal.classList.remove("write-form-error");
});

writeForm.addEventListener("submit", function (event) {
  if ( !writeNameInput.value || !writeEmailInput.value || !writeMessageInput.value ) {
    event.preventDefault();
    writeFormModal.classList.remove("write-form-error");
    writeFormModal.offsetWidth = writeFormModal.offsetWidth;
    writeFormModal.classList.add("write-form-error");
  } else {
    localStorage.setItem("name", writeNameInput.value);
    localStorage.setItem("email", writeEmailInput.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (writeFormModal.classList.contains("write-form-active")) {
      writeFormModal.classList.remove("write-form-active");
      writeFormModal.classList.remove("write-form-error");
    }

    if (mapModal.classList.contains("modal-map-active")) {
      mapModal.classList.remove("modal-map-active");
    }
  }
});

mapLink.addEventListener("click", function () {
  event.preventDefault();

  mapModal.classList.add("modal-map-active");
});

mapCloseButton.addEventListener("click", function (event) {
  event.preventDefault();

  mapModal.classList.remove("modal-map-active");
});
