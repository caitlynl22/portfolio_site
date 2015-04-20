'use strict';

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'contact', 'work'],
    menu: '#navbar',
    sectionsColor: ['#AA49B2', '#5CFED9', '#2DACBE', '#C8BBC9'],
    scrollOverflow: true
  });
});
