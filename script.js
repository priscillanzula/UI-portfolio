document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle - Enhanced
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  
  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  
  // Apply dark mode if previously enabled
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
      const icon = darkModeToggle.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }
  }
  
  // Toggle dark mode function
  function toggleDarkMode() {
    const isDarkModeActive = document.body.classList.contains("dark-mode");
    
    if (isDarkModeActive) {
      // Disable dark mode
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
      if (darkModeToggle) {
        const icon = darkModeToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      }
    } else {
      // Enable dark mode
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
      if (darkModeToggle) {
        const icon = darkModeToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        }
      }
    }
  }
  
  // Add event listener to dark mode toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
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
  const hireMeAbout = document.getElementById("hire-me");

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
  if (hireMeAbout) {
    hireMeAbout.addEventListener("click", showContactPopup);
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