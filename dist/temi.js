'use strict';

var createEmitter = function () {
  var listeners = Object.create(null);
  var emitter = {
    on: function (e, f) {
      !listeners[e] && (listeners[e] = []);
      listeners[e].push(f);
      return emitter;
    },
    off: function (e, f) {
      listeners[e] &&
        (listeners[e] = f == null ? [] : listeners[e].filter(function (a) { return a !== f; }));
      return emitter;
    },
    emit: function (e, a) {
      listeners[e] &&
        listeners[e].forEach(function (f) {
          f(a);
        });
      return emitter;
    }
  };
  return emitter;
};

module.exports = createEmitter;
