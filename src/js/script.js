$(document).ready(function () {
  $(".header__menu-burger").click(function (event) {
    $(".header__menu-burger, .header__nav, .welcome").toggleClass("active");
  });
});
