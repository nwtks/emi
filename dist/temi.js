'use strict';

function temi() {
  var listeners = Object.create(null);
  var emitter = {
    on: function on(e, f) {
      if (!listeners[e]) {
        listeners[e] = [];
      }
      listeners[e].push(f);
      return emitter
    },
    off: function off(e, f) {
      if (listeners[e]) {
        if (f == null) {
          listeners[e] = [];
        } else {
          var i = listeners[e].indexOf(f);
          if (i >= 0) {
            listeners[e].splice(i, 1);
          }
        }
      }
      return emitter
    },
    emit: function emit(e, a) {
      if (listeners[e]) {
        listeners[e].forEach(function (f) { return f(a); });
      }
      return emitter
    }
  };
  return emitter
}

module.exports = temi;
