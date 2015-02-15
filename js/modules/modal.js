var Modal = function(el) {
  this.el = $(el);
  return this;
};

Modal.prototype.open = function() {
  this.el.removeClass("hidden");
};

Modal.prototype.close = function() {
  this.el.addClass("hidden");
}

