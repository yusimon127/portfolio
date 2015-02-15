$(window).on("load", function() {
  var modal = new Modal($(".modal")),
      modalOverlay = new ModalOverlay($(".modal-overlay")),
      modalOverlayEl = $(".modal-overlay"),
      modalTriggerEl = $("#my-story-btn"),
      modalCloseBtnEl = $(".modal-close");

  modalTriggerEl.on("click", function() {
    modal.open();
    modalOverlay.open();
  });

  modalCloseBtnEl.on("click", function() {
    modal.close();
    modalOverlay.close();
  });

  modalOverlayEl.on("click", function() {
    modal.close();
    modalOverlay.close();
  });
});

