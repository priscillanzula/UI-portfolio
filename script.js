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
  const consistentFont = "Space Mono, sans-serif"; 
  const allElements = document.querySelectorAll("*:not(.fab):not(.fas):not(i)");
  allElements.forEach((element) => {
    element.style.fontFamily = consistentFont;
  });
});

// Setup typing animation for profession title
document.addEventListener("DOMContentLoaded", function() {
  setupTypingAnimation();
});

// Typing Animation for profession title
function setupTypingAnimation() {
  const professionElement = document.querySelector('.profession');
  if (!professionElement) return;
  
  // Make sure the profession element is styled properly
  professionElement.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
  professionElement.style.fontSize = '42px';
  professionElement.style.color = 'hsl(133, 61%, 33%)';
  professionElement.style.fontWeight = '600';
  
  // Add typing class to enable animation
  professionElement.classList.add('typing');
  
  // Profession titles to rotate through
  const titles = [
    'Data Analyst',
    'Data Scientist'
    
  ];
  
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 160; // Base typing speed (milliseconds)
  
  function typeEffect() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      // Deleting characters
      charIndex--;
      typingSpeed = 80; // Faster when deleting
    } else {
      // Typing characters
      charIndex++;
      typingSpeed = 200; // Normal speed when typing
    }
    
    // Update the text content
    professionElement.textContent = currentTitle.substring(0, charIndex);
    
    // If completed typing the current title
    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at the end of typing
      isDeleting = true;
      typingSpeed = 1500; // Wait longer before starting to delete
    } 
    // If completed deleting
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to next title
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 500; // Pause before typing the next title
    }
    
    // Schedule the next frame
    setTimeout(typeEffect, typingSpeed);
  }
  
  // Start the typing animation
  setTimeout(typeEffect, 1000); // Initial delay
}