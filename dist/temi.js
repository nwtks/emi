'use strict';

var createEmitter = function () {
  var listeners = Object.create(null);
  var emitter = {
    on: function (e, f) {
      if (!listeners[e]) {
        listeners[e] = [];
      }
      listeners[e].push(f);
      return emitter
    },
    off: function (e, f) {
      if (listeners[e]) {
        if (f == null) {
          listeners[e] = [];
        } else {
          listeners[e] = listeners[e].filter(function (a) { return a !== f; });
        }
      }
      return emitter
    },
    emit: function (e, a) {
      if (listeners[e]) {
        listeners[e].forEach(function (f) { return f(a); });
      }
      return emitter
    }
  };
  return emitter
};

module.exports = createEmitter;
