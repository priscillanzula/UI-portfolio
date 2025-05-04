// Ensure consistent font across the entire page
document.addEventListener("DOMContentLoaded", () => {
  const consistentFont = "Space Mono, sans-serif"; // Define the font family

  // Apply the font to all elements except Font Awesome icons
  const allElements = document.querySelectorAll("*:not(.fab):not(.fas):not(i)");
  allElements.forEach((element) => {
    element.style.fontFamily = consistentFont;
  });
});

// Toggle visibility of additional services
document.getElementById("more-services-link").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const additionalServices = document.getElementById("additional-services");
  
    // Toggle the "hidden" class
    if (additionalServices.classList.contains("hidden")) {
      additionalServices.classList.remove("hidden");
      this.textContent = "Show Less ←"; // Update link text
    } else {
      additionalServices.classList.add("hidden");
      this.textContent = "More Services →"; // Reset link text
    }
  });

  // Open the popup when "Contact" is clicked
  document.querySelector('a[href="#contact"]').addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact-popup").classList.remove("hidden");
  });
  // Close the popup when the close button is clicked
  document.querySelector(".close-popup").addEventListener("click", function () {
    document.getElementById("contact-popup").classList.add("hidden");
  });
  
  // Close the popup when clicking outside the form
  document.getElementById("contact-popup").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
    }
  });

// Show Contact Form Popup when "Hire Me" navigation link is clicked
function showContactPopup() {
  document.getElementById("contact-popup").classList.remove("hidden");
}

document.getElementById("hire-me-nav").addEventListener("click", (e) => {
  e.preventDefault();
  showContactPopup();
});

document.getElementById("hire-me-btn").addEventListener("click", showContactPopup);

// Close the popup when clicking outside the form or on the close button
document.getElementById("contact-popup").addEventListener("click", (e) => {
  if (e.target === document.getElementById("contact-popup")) {
    document.getElementById("contact-popup").classList.add("hidden");
  }
});

document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("contact-popup").classList.add("hidden");
});

// Dark Mode Toggle
if (!window.darkModeToggleInitialized) {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun"); // Change to sun icon for light mode
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon"); // Change back to moon icon
    }
  });

  window.darkModeToggleInitialized = true;
}

// Responsive Navigation Menu (for small screens)
const navToggle = document.createElement("button");
navToggle.textContent = "☰"; // Hamburger menu icon
navToggle.classList.add("nav-toggle");
document.querySelector("#header").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  const nav = document.querySelector(".nav-pills");
  nav.classList.toggle("show");
});
// Responsive Navigation Menu (for small screens)
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.createElement("button");
  navToggle.textContent = "☰"; // Hamburger menu icon
  navToggle.classList.add("nav-toggle");
  document.querySelector("#header").appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav-pills");
    nav.classList.toggle("show");
  });

  // Close the navigation menu when a link is clicked (for small screens)
  const navLinks = document.querySelectorAll(".nav-pills .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.querySelector(".nav-pills");
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    });
  });
});

// Ensure consistent font across the entire page
document.addEventListener("DOMContentLoaded", () => {
  const consistentFont = "Space Mono, sans-serif"; // Define the font family

  // Apply the font to all elements except Font Awesome icons
  const allElements = document.querySelectorAll("*:not(.fab):not(.fas):not(i)");
  allElements.forEach((element) => {
    element.style.fontFamily = consistentFont;
  });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun"); // Change to sun icon for light mode
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon"); // Change back to moon icon
  }
});

// Show Contact Form Popup
function showContactPopup() {
  document.getElementById("contact-popup").classList.remove("hidden");
}

// Close Contact Form Popup
function closeContactPopup() {
  document.getElementById("contact-popup").classList.add("hidden");
}

// Add Event Listeners for Contact Form Popup
document.getElementById("hire-me-nav").addEventListener("click", (e) => {
  e.preventDefault();
  showContactPopup();
});

document.getElementById("hire-me-btn").addEventListener("click", showContactPopup);

document.querySelector(".close-popup").addEventListener("click", closeContactPopup);

document.getElementById("contact-popup").addEventListener("click", (e) => {
  if (e.target === document.getElementById("contact-popup")) {
    closeContactPopup();
  }
});