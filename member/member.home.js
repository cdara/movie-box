//movieflix jquery
(function() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  $(document).ready(function() {

    //Header navbar on scroll background black
    var scroll_pos = 0;
    var filx_scroll = $('#flixhome');
    var flix_nav = filx_scroll.offset();
    $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > flix_nav.top) {
        $('#flix-navbar').css('background-color', '#000000');
      } else {
        $('#flix-navbar').css('background-color', 'transparent');
      }
    });

    //movieflix image retrieval from json and generating DOM

    //new release
    var newReleasePoster = document.getElementById('new-release');
    var html = '<div class="movie-tile"';
    for (var i = 0; i < 25; i++) {
      html += "><img id=flix-play-" + i + " src=" + movieData[i].Poster + "";
    }
    html += "</div>";
    newReleasePoster.innerHTML = html;

    //trending
    var trendingPoster = document.getElementById('watch-trending');
    var htmlTrending = '<div class="movie-tile"';
    for (var j = 25; j < 50; j++) {
      htmlTrending += "><img id=flix-play-" + j + " src=" + movieData[j].Poster + "";
    }
    htmlTrending += "</div>";
    trendingPoster.innerHTML = htmlTrending;

    //favorite
    var favoritePoster = document.getElementById('watch-favorite');
    var htmlFavorite = '<div class="movie-tile"';
    for (var k = 55; k < 64; k++) {
      htmlFavorite += "><img id=flix-play-" + k + " src=" + movieData[k].Poster + "";
    }
    htmlFavorite += "</div>";
    favoritePoster.innerHTML = htmlFavorite;

    //mouse wheel
    $("#new-release").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 70);
      event.preventDefault();
    });

    $("#watch-trending").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 70);
      event.preventDefault();
    });

    $("#watch-favorite").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 70);
      event.preventDefault();
    });
  });
})();
