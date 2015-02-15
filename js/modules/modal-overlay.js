var ModalOverlay = function(el) {
  this.el = $(el);
  return this;
};

ModalOverlay.prototype.open = function() {
  this.el.addClass("modal-opened");
};

ModalOverlay.prototype.close = function() {
  this.el.removeClass("modal-opened");
}

