Hooks.once('init', () => {
  game.socket.on('module.popout-tools', (data) => {
    console.log(`Popout Tools | Responding to emit`);
    if (data.users && !data.users.includes(game.user.id)) return;
    if (data.op === 'close') popoutClose(data);
    if (data.op === 'open') popoutOpen(data);
  })
});

function popoutClose(data) {
  Object.values(ui.windows).forEach(w => {
    if (data.targets === "all") w.close();
    else if (data.targets.includes(w.constructor.name)) {
      w.close();
    }
  });
}

function popoutOpen(data) {
  let ip = new ImagePopout(data.img, {
    uuid: data.uuid,
    title: data.title,
    editable: false,
    shareable: false,
  });
  ip.render(true);
}
