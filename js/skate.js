$(document).on("keydown", function(event) {
  // space bar - jump
  if(event.keyCode == 32) {
    if(pause()) return
    person.jump()
  }
  // d - push forward
  if(event.keyCode == 68) {
    if(pause()) return
    person.pushFoward()
  }
  // p - pause
  if(event.keyCode == 80) {
    if(pause()) return
    game.pause()
  }
})

$(document).on("ready", function() {
  window.person = new Person()
  window.game   = new Game()

  game.start()
})

var pause = function() {
  return $('body.pause').length > 0
}
