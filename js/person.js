var Person = function() {
  this.body = $(".sk8terboi")
}

Person.prototype.pushFoward = function() {
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

var addAndRemoveClass = function(classes, ms) {
  person.body.toggleClass(classes)
  setTimeout(function() {
    person.body.toggleClass(classes)
  }, ms)
}
