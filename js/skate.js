var Person = function() {
  this.body = $(".sk8terboi")
}

Person.prototype.jump = function() {
  if(this.isJumping()) return false

  var body = this.body
  body.toggleClass("ontheground jumping")
  setTimeout(function() {
    body.toggleClass("ontheground jumping")
  }, 200)
}

Person.prototype.isJumping = function() {
  return this.body.hasClass("jumping")
}

$(document).on("keyup", function(event) {
  // space bar
  if(event.keyCode == 32) {
    person.jump()
  }
})

$(document).on("ready", function() {
  window.person = new Person()
})
