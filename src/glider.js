new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  draggable: true,
  dots: '#dots',
  scroll: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
  responsive: [
    {
      // screens greater than >= 1201px
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      // screens greater than >= 769px
      breakpoint: 769,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '3',
      },
    },
    {
      // screens greater than >= 601px
      breakpoint: 601,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '2',
      },
    },
    {
      // screens greater than >= 376px
      breakpoint: 376,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '1.5',
      },
    },
  ],
});
