const createEmitter = () => {
  const listeners = Object.create(null);
  const emitter = {
    on: (e, f) => {
      !listeners[e] && (listeners[e] = []);
      listeners[e].push(f);
      return emitter;
    },
    off: (e, f) => {
      listeners[e] &&
        (listeners[e] = f == null ? [] : listeners[e].filter((a) => a !== f));
      return emitter;
    },
    emit: (e, a) => {
      listeners[e] &&
        listeners[e].forEach((f) => {
          f(a);
        });
      return emitter;
    }
  };
  return emitter;
};

export default createEmitter;
