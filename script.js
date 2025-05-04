document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const icon = darkModeToggle.querySelector("i");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    });
  }

  // Responsive Navigation Menu
  const navToggle = document.createElement("button");
  navToggle.textContent = "☰"; // Hamburger menu icon
  navToggle.classList.add("nav-toggle");
  document.querySelector("#header").appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav-pills");
    nav.classList.toggle("show");
  });

  const navLinks = document.querySelectorAll(".nav-pills .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.querySelector(".nav-pills");
      nav.classList.remove("show");
    });
  });

  // Toggle Visibility of Additional Services
  const moreServicesLink = document.getElementById("more-services-link");
  const additionalServices = document.getElementById("additional-services");
  if (moreServicesLink && additionalServices) {
    moreServicesLink.addEventListener("click", (e) => {
      e.preventDefault();
      additionalServices.classList.toggle("hidden");
      moreServicesLink.textContent = additionalServices.classList.contains("hidden")
        ? "More Services →"
        : "Show Less ←";
    });
  }

  // Contact Form Popup
  const contactPopup = document.getElementById("contact-popup");
  const closePopupButton = document.querySelector(".close-popup");

  function showContactPopup() {
    if (contactPopup) {
      contactPopup.classList.remove("hidden");
    }
  }

  function closeContactPopup() {
    if (contactPopup) {
      contactPopup.classList.add("hidden");
    }
  }

  const hireMeNav = document.getElementById("hire-me-nav");
  const hireMeBtn = document.getElementById("hire-me-btn");

  if (hireMeNav) {
    hireMeNav.addEventListener("click", (e) => {
      e.preventDefault();
      showContactPopup();
    });
  }

  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", showContactPopup);
  }

  if (closePopupButton) {
    closePopupButton.addEventListener("click", closeContactPopup);
  }

  if (contactPopup) {
    contactPopup.addEventListener("click", (e) => {
      if (e.target === contactPopup) {
        closeContactPopup();
      }
    });
  }

  // Ensure Consistent Font Across the Entire Page
  const consistentFont = "Space Mono, sans-serif"; // Define the font family
  const allElements = document.querySelectorAll("*:not(.fab):not(.fas):not(i)");
  allElements.forEach((element) => {
    element.style.fontFamily = consistentFont;
  });
});