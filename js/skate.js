$(document).on("keyup", function(event) {
  // space bar
  if(event.keyCode == 32) {
    person.jump()
  }
  // d
  if(event.keyCode == 68) {
    person.burst()
  }
})

$(document).on("ready", function() {
  window.person = new Person()
  window.track  = new Track()

  setInterval(function() {
    window.track.addBlock(1)
  }, 800)
})
