### Summary: Object Methods and `this`

In modern React (with Hooks), understanding object methods and the `this` keyword is not essential, but still useful, particularly for older versions of React.

#### Key Points:

- **Object Methods**: Methods can be defined both during and after object creation.
- **`this` Keyword**:
  - `this` behaves differently depending on whether regular functions or arrow functions are used.
  - `this` is context-dependent and can change, especially when a method is called through a reference or in functions like `setTimeout`.
- **Avoiding Issues**:
  - Use `bind` to preserve the original `this`.
  - Arrow functions can solve some `this`-related problems, but they should not be used as methods in objects because they do not bind `this` in the expected way.

For further learning, it's recommended to explore resources like the screencast series "Understand JavaScript's `this` Keyword in Depth" by egghead.io.
[This in the global context](https://egghead.io/lessons/javascript-this-in-the-global-context)
