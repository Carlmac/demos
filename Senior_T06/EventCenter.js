function EventCenter() {
  this.events = {};
}

EventCenter.prototype.on = function(eventType, handler) {
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push({
    handler: handler
  });
}

EventCenter.prototype.fire = function () {
  var _args = [].slice.call(arguments);
  var eventType = _args.shift();
  if (!this.events[eventType]) return;
  var handlerArgs = _args;
  for (var i = 0; i < this.events[eventType].length; i++) {
    this.events[eventType][i].handler.apply(this, handlerArgs);
  }
}

EventCenter.prototype.off = function(eventType) {
  delete this.events[eventType];
}