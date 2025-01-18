$(document).ready(function () {
  // Initialize the first slider
  $(".section-feedback-slider").slick({
    dots: false,
    infinite: true,
    prevArrow: $("#arrow-feedback-left"),
    nextArrow: $("#arrow-feedback-right"),
    speed: 600,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: false,
    responsive: [
      // {
      //   breakpoint: 1800, // Tablet and larger
      //   settings: {
      //     slidesToShow: 3.7, // Number of slides to show at once
      //     centerMode: true, // Optional: Keep centering on smaller screens
      //     centerPadding: "20px", // Adjust padding if needed
      //   },
      // },
      // {
      //   breakpoint: 1600, // Tablet and larger
      //   settings: {
      //     slidesToShow: 3, // Number of slides to show at once
      //     centerMode: true, // Optional: Keep centering on smaller screens
      //     centerPadding: "20px", // Adjust padding if needed
      //   },
      // },
      // {
      //   breakpoint: 1400, // Tablet and larger
      //   settings: {
      //     slidesToShow: 2.7, // Number of slides to show at once
      //     centerMode: true, // Optional: Keep centering on smaller screens
      //     centerPadding: "20px", // Adjust padding if needed
      //   },
      // },
      // {
      //   breakpoint: 1150, // Tablet and larger
      //   settings: {
      //     slidesToShow: 2, // Number of slides to show at once
      //     centerMode: true, // Optional: Keep centering on smaller screens
      //     centerPadding: "20px", // Adjust padding if needed
      //   },
      // },
      {
        breakpoint: 1024, // Tablet and larger
        settings: {
          slidesToShow: 1, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});

// StartSlider 1
$(document).ready(function () {
  $(".sliders")
    .slick({
      dots: false, // Disable default dots
      arrows: false, // Optional: hide navigation arrows
      autoplay: true,
      autoplaySpeed: 2000,
      lazyLoad: "progressive",
      speed: 1000,
    })
    .slickAnimation();

  $(".slider-dots span").on("click", function () {
    var slideIndex = $(this).data("slide");
    $(".sliders").slick("slickGoTo", slideIndex);
  });

  $(".sliders").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slider-dots span").removeClass("active");
      $('.slider-dots span[data-slide="' + nextSlide + '"]').addClass("active");
    }
  );
});
///////////////////////////////////////////////////////////////
$(".slides-services").slick({
  dots: false,
  infinite: true,
  prevArrow: $("#arrow-services-left"),
  nextArrow: $("#arrow-services-right"),
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
});
////////////////////////////////////////////
$(document).ready(function () {
  // Initialize all sliders
  $(".slides-ourWork").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Disable default arrows
      dots: true, // Enable dots if you want
    });

    // Custom arrow functionality for each slider
    var $slider = $(this); // Get the current slider

    $slider
      .closest(".slider-ourWork")
      .find(".arrow-work-left")
      .on("click", function () {
        $slider.slick("slickPrev");
      });

    $slider
      .closest(".slider-ourWork")
      .find(".arrow-work-right")
      .on("click", function () {
        $slider.slick("slickNext");
      });
  });
});
// Slider logos
$(document).ready(function () {
  $(".slider-logos").slick({
    prevArrow: $(".right-logos"),
    nextArrow: $(".left-logos"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1025, // Mobile landscape and larger
        settings: {
          slidesToShow: 1, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 480, // Mobile portrait and smaller
        settings: {
          slidesToShow: 1, // Number of slides to show at once
          centerMode: false, // Optional: Turn off centering for small screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});
