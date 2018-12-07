const createEmitter = () => {
  const listeners = Object.create(null)
  const emitter = {
    on: (e, f) => {
      if (!listeners[e]) {
        listeners[e] = []
      }
      listeners[e].push(f)
      return emitter
    },
    off: (e, f) => {
      if (listeners[e]) {
        if (f == null) {
          listeners[e] = []
        } else {
          listeners[e] = listeners[e].filter(a => a !== f)
        }
      }
      return emitter
    },
    emit: (e, a) => {
      if (listeners[e]) {
        listeners[e].forEach(f => f(a))
      }
      return emitter
    }
  }
  return emitter
}

export default createEmitter
