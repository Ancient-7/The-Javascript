# The Deep Clone Protocol
*It must take an object and return a completely independent copy.*

## TechStack Used
- **JavaScript (ES6+)**
- **Node.js (Testing)**

## 🎯 The Goal
**Writing a custom `deepClone` function from scratch which must take an `object` and return a completely `independent copy`.**

## 🤨 The Concept
**In JavaScript, `primitives` (`strings`, `numbers`, `booleans`) are passed by `Value`. `Objects` and Arrays are passed by `Reference` (a wire connecting to the original).
If you have an `array` inside an `object` inside `another object`, using the `spread operator` { ...obj } only copies the `top layer`. The `nested arrays` still share the `same wire`!**

## 😤 The Challenge:
**You must write a custom `deepClone` function from scratch. It must take an object and return a completely independent copy.**

## 🤐 The Hardcore Rules:

- **`No Cheating`: You are `NOT allowed` to use the lazy trick: `JSON.parse(JSON.stringify(obj))`. You must do this using JavaScript logic.**

- **`Recursion Required`: Your function must check every property. If the property is a normal value (like a number), copy it. If the property is another object or array, your function must call itself to dig deeper.**

- **`Array vs Object`: JavaScript thinks Arrays are Objects (`typeof []` is `"object"`). Your code must be `smart enough` to create a new `[]` for `arrays`, and a new `{}` for `objects`.**

## 🧠 What I learned
- **I learned that in `Recursion` if you call a `same function` (`first call`) inside the `same function` (`second call`), it doesn't mean that the the `first function call` will `stop executing`, but it will wait untill the `second function call` `ends or returns` a `value`, and then the `first function call` `continue` its `work`.It's like `first call `say's to it's `own brother` i.e `second call` that `"Hey if you did your task then tell me, I have paused just for you."`**
- **Because of a `30-year-old legacy bug in JavaScript`, `typeof null` evaluates exactly to the string `"object"`**

## 💻 Code Snippet
*Core logic to clone any array or object.*
```Javascript
function deepClone(target) {
  // 1. Handle the base case: If 'target' is null or not an object, just return it.
  if (target !== null && typeof target !== "object") {
    return target;
  }
  // 2. Check if 'target' is an Array or an Object. Create an empty version of it.
  if (typeof target === "object" && !Array.isArray(target)) {
    let clonedOnject = {};
    // 3. Loop through the keys of the 'target'.
    for (let key in target) {
      // 4. Recursively call deepClone() on every single value, and attach it to new object.
      clonedOnject[key] = deepClone(target[key]);
    }
    // 5. Return the fully assembled clone of onject.
    return clonedOnject;
  } else {
    let clonedArr = [];
    // 3. Loop through the value of the 'target'.
    for (let item of target) {
      // 4. Recursively call deepClone() on every single value, and attach it to new array.
      clonedArr.push(deepClone(item));
    }
    // 5. Return the fully assembled clone of array.
    return clonedArr;
  }
}
```