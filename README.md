# Popout Tools
Allows macros to emit a socket event requesting all players to close windows, for example ImagePopouts
- Can close all windows indescrimately
- Or pass an array of window types you want to be closed

Allows macros to show a popout to only specific players

# Example Macros

### Request players close popouts

```js
// Request players close all windows
game.socket.emit('module.popout-closer', { op: 'close', targets: 'all' })
```
```js
// Request players close only ImagePopout windows
game.socket.emit('module.popout-closer', { op: 'close', targets: ['ImagePopout'] })
```

If you also want to close windows for the user who runs the macro:

```js
// Request all players including macro player close all windows
Object.values(ui.windows).forEach(w => w.close())
game.socket.emit('module.popout-closer', { op: 'close', targets: 'all' })
```
```js
// Request all players including macro player close only ImagePopout windows
Object.values(ui.windows).forEach(w => {
  if (w.constructor.name === 'ImagePopout') w.close()
})
game.socket.emit('module.popout-closer', { op: 'close', targets: ['ImagePopout'] })
```

### Request specific players open popouts

```js
// Example to show a popout to user named "Steve"
const userlist = [
  game.users.getName('Steve').id,
]

const a = game.actors.getName('Ancient Red Dragon')

game.socket.emit('module.popout-tools', {
  users: userlist,
  op: 'open',
  title: a.data.name,
  img: a.data.img,
  uuid: a.data.id,
})
```