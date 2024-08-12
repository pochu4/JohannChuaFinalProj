var grid = document.querySelector('.msnry-grid');
var iso = new Isotope(grid, {
  itemSelector: '.msnry-grid-item',
  masonry: {
    columnWidth: '.msnry-grid-sizer',
    gutter: '.msnry-gutter-sizer',
    percentPosition: true
  }
});

// Filtering
document.querySelectorAll('.button-group button').forEach(button => {
  button.addEventListener('click', function () {
    var filter = this.getAttribute('data-filter');
    iso.arrange({ filter: filter });
  });
});

