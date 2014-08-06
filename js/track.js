var Track = function() {
}

var range = function(a, b) {
  _results = [];
  for (var num = _i = b; _i >= a; num = --_i) {
    _results.push(num);
  }
  return _results;
}

// [x1, x2, y1, y2], [x1, x2, y1, y2]
var inzone = function(cordinateA, cordinateB) {
  var x = range(cordinateB[0], cordinateB[1]).filter(function(n) {
    return range(cordinateA[0], cordinateA[1]).indexOf(n) >= 0
  }).length > 0
  var y = range(cordinateB[2], cordinateB[3]).filter(function(n) {
    return range(cordinateA[2], cordinateA[3]).indexOf(n) >= 0
  }).length > 0

  return [x, y]
}

Track.prototype.addBlock = function(height) {
  $("<div class='js-block block block-" + height + "'></div>").appendTo(".canvas")
}

Track.prototype.pause = function() {
  $(".js-block").each(function(_, block) {
    $(block).css("left", block.offsetLeft + "px")
  })
  $('body').addClass('pause')
  clearInterval(track.detecting)
  clearInterval(track.blocking)
}

Track.prototype.detect = function() {
  var track = this

  this.tracked = setInterval(function() {
    var man = person.body[0]
    var x1 = man.offsetLeft
    var x2 = man.offsetLeft + man.clientWidth
    var y1 = man.offsetTop
    var y2 = man.offsetTop + man.clientHeight

    $('.js-block').each(function(_, block) {
      var _x1 = block.offsetLeft
      var _x2 = block.offsetLeft + block.clientWidth
      var _y1 = block.offsetTop
      var _y2 = block.offsetTop + block.clientHeight
      var inz = inzone([x1, x2, y1, y2], [_x1, _x2, _y1, _y2])

      if(_x2 <= 0) {
        // if block is not in frame
        block.remove()
      } else if(!inz[0] && $(man).hasClass("ontop") && $(block).hasClass("blocking")) {
        // if man is on a block
        $(man).removeClass("ontop").removeAttr("style")
        $(block).removeClass("blocking")
      } else if(inz.indexOf(true) >= 0) {
        // if blocked in any way
        if(inz[0] && !inz[1]) {
          // if man in the air (blocked in x but not y)
          $(block).addClass("blocking")
          $(man).addClass('ontop').css("margin-bottom", block.clientHeight + 4 + "px")
        } else if(inz[0] && inz[1]) {
          // if totally blocked
          track.pause()
        }
      }
    })
  }, 100)
}
