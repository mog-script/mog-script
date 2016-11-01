# M.O.G. Script

## Installation 💾

```
npm install -g mog-script
```

## Usage 🍴

Say you have a M.O.G. file named `🍧.💎` that contains:

```javascript
💎 { createStore } = require('redux')

💎 reducer = ⚙️ (state, action) { 
  🚦 (action.type) {
    💼 'INCREMENT': 
      🎁 state + action.payload
     
    💼 'DECREMENT': 
      🎁 state - action.payload
  }
}

💎 initialState = 0

💎 store = createStore(reducer, initialState)

store.subscribe(⚙️ () { console.log(`New value is ${store.getState()}`) }

process.stdin.on('data', ⚙️ (chunk) {
  ❓ (chunk[0] === '-') {
    store.dispatch({ type: 'DECREMENT', payload: chunk.slice(1) })
  } ❗️ {
    store.dispatch({ type: 'INCREMENT', payload: chunk })
  }
})
```
