// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  
  // Register an event handler
  on(eventName, callback) {
    if(!this.events[eventName]) {
      this.events[eventName] = {
        callbacks: []
      }
    }
    this.events[eventName].callbacks.push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    for(let callback of this.events[eventName].callbacks) {
      callback();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName].callbacks = [];
  }
}

module.exports = Events;
