var elem = document.querySelector('.container');

var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.container', {
  // options
 
});