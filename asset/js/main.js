jQuery(document).ready(function ($) {
  headerScroll();

  $(".img-main").flickity({
    // options
    cellAlign: "left",
    contain: true,
    imagesLoaded: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 2000,
  });

  if ($(".img-nav")) {
    var pagebtn = false;

    $(".img-caroucel-nav").length >= 7 ? (pagebtn = true) : (pagebtn = false);

    $(".img-nav").flickity({
      asNavFor: ".img-main",
      contain: true,
      pageDots: false,
      prevNextButtons: pagebtn,
    });
  }
  // if ($(".img-nav2")) {
  //   var pagebtn = false;

  //   $(".img-caroucel-nav").length >= 7 ? (pagebtn = true) : (pagebtn = false);

  //   $(".img-nav2").flickity({
  //     asNavFor: ".img-main2",
  //     contain: true,
  //     pageDots: false,
  //     watchCSS: true,
  //     prevNextButtons: pagebtn,
  //   });
  // }
  // $(".img-main2").flickity({
  //   // options
  //   cellAlign: "left",
  //   contain: true,
  //   imagesLoaded: true,
  //   prevNextButtons: false,
  //   pageDots: false,
  // });
});

function headerScroll() {
  var mainHeader = $(".header"),
    //this applies only if secondary nav is below intro section
    headerHeight = mainHeader.height();

  //set scrolling variables
  var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

  mainHeader.on("click", ".nav-trigger", function (event) {
    // open primary navigation on mobile
    event.preventDefault();
    mainHeader.toggleClass("nav-open");
  });

  $(window).on("scroll", function () {
    if (!scrolling) {
      scrolling = true;
      !window.requestAnimationFrame
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
    }
  });

  $(window).on("resize", function () {
    headerHeight = mainHeader.height();
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();

    checkSimpleNavigation(currentTop);

    previousTop = currentTop;
    scrolling = false;
  }

  function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
      //if scrolling up...
      mainHeader.removeClass("-translate-y-full");
    } else if (
      currentTop - previousTop > scrollDelta &&
      currentTop > scrollOffset
    ) {
      //if scrolling down...
      mainHeader.addClass("-translate-y-full");
    }
  }
}
console.log($(".img-caroucel-nav").length);
