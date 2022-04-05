console.log("loaded JS adminPage.js");
// Init on page load
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);

    // Validate that all variables are defined
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // Toggle the navbar
        nav.classList.toggle("show");
        // Change icon
        toggle.classList.toggle("bx-x");
        // Add padding to body
        bodypd.classList.toggle("body-pd");
        // Add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  // Init navbar toggle action
  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  // Set link to active
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));
});
