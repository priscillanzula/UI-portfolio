
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
  // Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Icon for dark mode
darkModeToggle.classList.add("dark-mode-toggle");
document.querySelector("#header").appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change to sun icon for light mode
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change back to moon icon
  }
});

// Responsive Navigation Menu (for small screens)
const navToggle = document.createElement("button");
navToggle.textContent = "☰"; // Hamburger menu icon
navToggle.classList.add("nav-toggle");
document.querySelector("#header").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  const nav = document.querySelector(".nav-pills");
  nav.classList.toggle("show");
});