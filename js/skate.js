var Person = function() {
  this.body = $(".sk8terboi")
}

var addAndRemoveClass = function(classes, ms) {
  person.body.toggleClass(classes)
  setTimeout(function() {
    person.body.toggleClass(classes)
  }, ms)
}

Person.prototype.burst = function() {
  if(this.body.hasClass("speed")) return false
  addAndRemoveClass("push", 200)
  addAndRemoveClass("speed", 4000)
}

Person.prototype.jump = function() {
  if(this.isJumping()) return false
  addAndRemoveClass("ontheground jumping", 200)
}

Person.prototype.isJumping = function() {
  return this.body.hasClass("jumping")
}

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
})
