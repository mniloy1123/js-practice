const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
console.log(contacts.get("Jessie")); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size);



const myMap = new Map();

myMap.set(0, "zero")
myMap.set(1, "one")

for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`)
}

for (const key of myMap.keys()) {
    console.log(key)
}

for (const value of myMap.values()) {
    console.log(value)
}

myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`)
})

const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
]

const map = new Map(kvArray)

console.log([...map])

const original = new Map([[1, "one"]])

console.log(original)

const clone =  new Map(original)

console.log(clone.get(1))

console.log(original === clone)


const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  console.log(second)

  const merged = new Map([...first, ...second])

  console.log(merged)

  console.log(merged.get(1))