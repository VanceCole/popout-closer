# Popout Closer
Allows macros to emit a socket event requesting all players to close windows, for example ImagePopouts
- Can close all windows indescrimately
- Or pass an array of window types you want to be closed

# Example Macros
If you only want players to have windows closed:

```js
// Request players close all windows
game.socket.emit('module.popout-closer', { targets: 'all' })
```
```js
// Request players close only ImagePopout windows
game.socket.emit('module.popout-closer', { targets: ['ImagePopout'] })
```

If you also want to close windows for the user who runs the macro:

```js
// Request all players including macro player close all windows
Object.values(ui.windows).forEach(w => w.close())
game.socket.emit('module.popout-closer', { targets: 'all' })
```
```js
// Request all players including macro player close only ImagePopout windows
Object.values(ui.windows).forEach(w => {
  if (w.constructor.name === 'ImagePopout') w.close()
})
game.socket.emit('module.popout-closer', { targets: ['ImagePopout'] })
```
