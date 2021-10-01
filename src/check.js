$('.navigation__link').click(function (e) {
  $('#navi-toggle').removeAttr('checked');
  e.preventDefault();
});

$('.features_id').click(function (e) {
  $('html, body').animate(
    {
      scrollTop: $('#section-tours').offset().top,
    },
    1200
  );
  e.preventDefault();
});

$('.about_us').click(function (e) {
  $('html, body').animate(
    {
      scrollTop: $('.section-about').offset().top,
    },
    1200
  );
  e.preventDefault();
});

$('.contact__us_').click(function (e) {
  location.href = '#popup';

  e.preventDefault();
});

$('.goto__designs').click(function (e) {
  $('html, body').animate(
    {
      scrollTop: $('.section-ourdesigns').offset().top,
    },
    1200
  );
  e.preventDefault();
});
// $('#navi-toggle').click(function (e) {
//   var input = $('#navi-toggle');
//   input.attr('checked', 'checked');
//   e.preventDefault();
// });
