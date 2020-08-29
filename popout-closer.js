
Hooks.once('init', () => {
  game.socket.on('module.popout-closer', (data) => {
    console.log(data.targets);
    Object.values(ui.windows).forEach(w => {
      if (data.targets === "all") w.close();
      else if (data.targets.includes(w.constructor.name)) {
        w.close();
      }
    })
  })
});
