class EventEmitter {
  constructor() {
    // This is your dictionary.
    // It will eventually look like: { "playerDeath": [fn1, fn2], "levelUp": [fn3] }
    this.events = {};
  }
  
  subscribe(eventName, callback) {
    // 1. Check if the eventName exists in this.events. If not, create it as an empty array.
    if (!(this.events[eventName])){
      this.events[eventName] = [];
    }
    
    // 2. Add the callback to the array.
    this.events[eventName].push(callback)
    
    // 3. RETURN a function that filters out THIS specific callback when called.
    return () => {
      this.events[eventName] = this.events[eventName].filter( (storedCallback) => storedCallback !== callback)
    }
  }
  
  emit(eventName, data) {
    // 1. Check if the eventName exists in this.events.
    // 2. If it does, loop through the array and call every function, passing the data.
    if(this.events[eventName]){
        this.events[eventName].forEach(fun => fun(data))
    }
  }
}

// ==========================================
// 🛠️ TEST CASES - DO NOT CHANGE 🛠️
// ==========================================

const gameBus = new EventEmitter();

// System 1: The UI
const uiUnsubscribe = gameBus.subscribe("playerDeath", (data) => {
  console.log(`[UI SYSTEM] Displaying Game Over screen for ${data.player}`);
});

// System 2: The Audio
gameBus.subscribe("playerDeath", (data) => {
  console.log(`[AUDIO SYSTEM] Playing sad music...`);
});

// TRIGGER THE EVENT
console.log("--- First Death ---");
gameBus.emit("playerDeath", { player: "Nishu" });

/* Expected Output:
--- First Death ---
[UI SYSTEM] Displaying Game Over screen for Nishu
[AUDIO SYSTEM] Playing sad music...
*/

// UN-SUBSCRIBE THE UI
uiUnsubscribe();

// TRIGGER THE EVENT AGAIN
console.log("\n--- Second Death ---");
gameBus.emit("playerDeath", { player: "Bot_392" });

/* Expected Output:
--- Second Death ---
[AUDIO SYSTEM] Playing sad music... 
(Notice the UI system didn't run this time!)
*/


// My experement (My custom event)
// let gameBus = new EventEmitter()
// const unsub = gameBus.subscribe("clicked", (data)=>{
// console.log("Clicked event by ", data.id)
// })

// gameBus.emit("clicked", {id: 1711050448})

// unsub()

// gameBus.emit("clicked", {id: 111})

