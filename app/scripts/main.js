'use strict';

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'contact', 'fourthPage', 'lastPage'],
    menu: '#navbar',
    sectionsColor: ['#AA49B2', '#5CFED9', '#7BAABE', 'whitesmoke', '#000']
  });
});
