$(document).on("keyup", function(event) {
  // space bar - jump
  if(event.keyCode == 32) {
    person.jump()
  }
  // d - push forward
  if(event.keyCode == 68) {
    person.pushFoward()
  }
  // p - pause
  if(event.keyCode == 80) {
    track.pause()
  }
})

$(document).on("ready", function() {
  window.person = new Person()
  window.track  = new Track()

  track.detect()
  track.blocking = setInterval(function() {
    window.track.addBlock(1)
  }, 3000)
})
