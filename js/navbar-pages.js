$(document).ready(function () {
  // Function to handle dropdown toggle
  function toggleDropdown(buttonClass, menuClass, updateClass) {
    $(buttonClass).click(function (event) {
      event.stopPropagation();
      // Close all other dropdown menus
      $(
        ".dropdown-menu-lang, .list-services, .dropdown-menu-filter, .dropdown-menu-filter2, .dropdown-menu-filter3"
      )
        .not(menuClass)
        .removeClass("d-flex");

      // Toggle the clicked dropdown menu
      $(menuClass).toggleClass("d-flex");
    });

    // Update dropdown button text and close menu
    $(menuClass)
      .find("a, .dropdown-mb")
      .click(function () {
        var selectedText = $(this).find("span").text();
        $(updateClass).text(selectedText);
        $(menuClass).removeClass("d-flex");
      });
  }

  // Initialize dropdowns
  toggleDropdown(
    ".dropdown-lang",
    ".dropdown-menu-lang",
    ".dropdown-lang span"
  );
  toggleDropdown(".btn-filter", ".dropdown-menu-filter", ".btn-filter span");
  toggleDropdown(".btn-filter2", ".dropdown-menu-filter2", ".btn-filter2 span");

  // Close dropdowns when clicking outside
  $(document).click(function () {
    $(
      ".dropdown-menu-lang, .dropdown-menu-filter, .dropdown-menu-filter2, .dropdown-menu-filter3"
    ).removeClass("d-flex");
  });
});
