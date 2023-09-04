$(".autoMobile_carousel").owlCarousel({
  items: 8,
  margin: 10,
  loop: true,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    769: {
      items: 8,
    },
  },
});

$(".lighting_carousel").owlCarousel({
  items: 5,
  margin: 10,
  loop: true,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    991: {
      items: 6,
    },
  },
});
$(".four_item_carousel").owlCarousel({
  items: 5,
  margin: 10,
  loop: true,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    991: {
      items: 4,
    },
  },
});

$(".best_seller").owlCarousel({
  items: 3,
  margin: 10,
  loop: true,
  nav: true,
  dots: false,
});
$(".customer_saying").owlCarousel({
  items: 3,
  margin: 10,
  loop: true,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
});

var WIDTH_LIMIT = 768;

window.addEventListener("resize", function (e) {
  var currentWidth = window.innerWidth;
  var toggle_button = document.getElementById("toggle-button");
  var close_button = document.getElementById("close-button");
  var toggle_menu = document.getElementById("toggle-menu");
  if (currentWidth <= WIDTH_LIMIT) {
    toggle_button.addEventListener("click", function () {
      toggle_menu.style.display = "block";
    });
    close_button.addEventListener("click", function () {
      toggle_menu.style.display = "none";
    });
  }
});

// select 2 jquery

$(document).ready(function () {
  //Select2
  $(".singleSelect2").select2({
    placeholder: "Choose Year", //placeholder
  });
});


