function emi() {
  const listeners = Object.create(null)
  const emitter = {
    on(e, f) {
      if (!listeners[e]) {
        listeners[e] = []
      }
      listeners[e].push(f)
      return emitter
    },
    off(e, f) {
      if (listeners[e]) {
        if (f == null) {
          listeners[e] = []
        } else {
          const i = listeners[e].indexOf(f)
          if (i >= 0) {
            listeners[e].splice(i, 1)
          }
        }
      }
      return emitter
    },
    emit(e, a) {
      if (listeners[e]) {
        listeners[e].forEach(f => f(a))
      }
      return emitter
    }
  }
  return emitter
}

export default emi
