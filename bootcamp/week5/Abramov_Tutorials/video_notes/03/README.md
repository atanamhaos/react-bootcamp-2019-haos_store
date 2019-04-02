# 03. Pure and Impure Functions
[Video Link](https://egghead.io/lessons/javascript-redux-pure-and-impure-functions)

Before learning more about Redux, it's important to know the difference between "Pure" and "Impure" functions.

**Pure:**
```JavaScript
function square(x) {
  return x * x;
}
function squareAll(items) {
  return items.map(square);
}
```
Pure functions are those whose return values depend only upon the values of their arguments. Pure functions don't have side effects like network or database calls. Pure functions also do not override the values of anything. In the above example, a new array is returned instead of modifying the `items` that was passed in.

**Impure:**
```JavaScript
function square(x) {
  updateXInDatabase(x);
  return x * x;
}
function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
```
Contrast the "Impure" function. A database is called, and values passed in are being overwritten.

This distinction is important to understand, since Redux requires that certain functions are pure.

