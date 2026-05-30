function deepClone(target) {
  // 1. Handle the base case: If 'target' is null or not an object, just return it.
  if (target === null || typeof target !== "object") {
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

// ==========================================
// 🛠️ TEST CASES - DO NOT CHANGE 🛠️
// ==========================================

const originalPlayer = {
  name: "Nishu",
  level: 42,
  inventory: ["Health Potion", "Iron Sword"],
  stats: {
    hp: 150,
    mana: 50,
    equipment: {
      head: "Iron Helm",
      chest: "Steel Armor",
    },
  },
};

// 1. Create the clone
const clonedPlayer = deepClone(originalPlayer);

// 2. We change the CLONE'S data
clonedPlayer.name = "Dark Nishu";
clonedPlayer.inventory.push("Magic Wand");
clonedPlayer.stats.hp = 9999;
clonedPlayer.stats.equipment.head = "Crown of Fire";

// 3. The Truth Test (Did the original stay safe?)
console.log("--- ORIGINAL PLAYER ---");
console.log("Name (Expected: Nishu):", originalPlayer.name);
console.log("Inventory (Expected 2 items):", originalPlayer.inventory.length);
console.log("HP (Expected: 150):", originalPlayer.stats.hp);
console.log("Head (Expected: Iron Helm):", originalPlayer.stats.equipment.head);

console.log("\n--- CLONED PLAYER ---");
console.log("Name:", clonedPlayer.name);
console.log("Inventory:", clonedPlayer.inventory);
console.log("Head:", clonedPlayer.stats.equipment.head);
