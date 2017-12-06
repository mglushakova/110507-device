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

writeFormLink.addEventListener("click", function (event) {
  event.preventDefault();

  writeFormModal.classList.add("write-form-active");
  writeNameInput.focus();
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

mapLink.addEventListener("click", function (event) {
  event.preventDefault();

  mapModal.classList.add("modal-map-active");
});

mapCloseButton.addEventListener("click", function (event) {
  event.preventDefault();

  mapModal.classList.remove("modal-map-active");
});

var controls = document.querySelectorAll(".slider-controls i");
var slider = document.querySelector(".promo-list");

for ( var i = 0; i < controls.length; i++ ) {
  controls[i].addEventListener("click", function (event) {
    for ( var k = 0; k < controls.length; k++ ) {
      if ( controls[k].classList.contains("active") ) {
        controls[k].classList.remove("active");
        slider.children[k].classList.remove("promo-item-active");
      }

      if ( controls[k] === event.target ) {
        controls[k].classList.add("active");
        slider.children[k].classList.add("promo-item-active");
      }
    }
  });
}

var tabs = document.querySelectorAll(".services-names-item");
var services = document.querySelector(".services-description");

for ( var n = 0; n < tabs.length; n++ ) {
  tabs[n].addEventListener("click", function (event) {
    for ( var k = 0; k < tabs.length; k++ ) {
      if ( tabs[k].classList.contains("services-current") ) {
        tabs[k].classList.remove("services-current");
        services.children[k].classList.remove("services-description-item-active");
      }

      if ( tabs[k] === event.target.closest("li") ) {
        tabs[k].classList.add("services-current");
        services.children[k].classList.add("services-description-item-active");
      }
    }
  });
}

