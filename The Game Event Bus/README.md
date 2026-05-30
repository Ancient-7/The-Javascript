# The Game Event Bus
*Building the EventEmitter class. It needs an internal dictionary to keep track of events and the functions listening to them.*


## 🚀 Tech Stacks Used
- **Javascript (ES6+)**
- **Node.js (For testing)**


## 😤 The Challenge:
**You need to build the EventEmitter class. It needs an internal dictionary to keep track of events and the functions listening to them.**


## 🎯 Goals
**Imagine you are building BGMI. When a player's health drops to 0, three different things need to happen:**

- **The UI needs to show a "Game Over" screen.**

- **The audio engine needs to play a death sound.**

- **The database needs to update the player's stats.**


## 🤐 The Hardcore Rules
- **subscribe(eventName, callback): This method adds a callback function to a specific event.**

- **The Unsubscribe Closure: The subscribe method must return a function. When that returned function is called, it should remove that specific callback from the event list so it stops listening. (This exact mechanic is how React's useEffect cleanup works!)**

- **emit(eventName, data): This method triggers the event. It must execute every callback currently subscribed to that event, passing the data to them.**


## 🧠 What I Learned
- **I was bit confused at start that how this even working but then I understood that the return function is only executed when it is called, and I was thinking that it will remove that callback function immediately as soon as it is added.**
- **The most important thing I learned is `objVar.eventName` is complete different from `objVar[eventName]`, `objVar.eventName` is findind `"eventName"` in `onjVar` while `objVar[eventName]` is finding `"playerDeath"` as `eventName = "playerDeath"`**


## 💻 Code Snippet
```Javascript
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
```