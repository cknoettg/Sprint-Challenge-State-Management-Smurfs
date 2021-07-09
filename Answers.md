1. What problem does the context API help solve?
The Context API solves the problem of passing props between deeply nested elements, so you can pass props from parent to grandchildren if needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is the holder of state. You can change state, but you can't change state in the store. Reducers take state, perform an action, and then change state. Actions are user actions that can change state via reducer. The store is the single source of truth because it is immutable and cannot change.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, while Component state is local to that component.Application state would be good to use for something that needs to be used across multiple components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk acts as middleware that allows us to communicate with an API. It changes action creators by letting us return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API seems useful because it lets you more easily access grand-child elements without passing props in a chain.
