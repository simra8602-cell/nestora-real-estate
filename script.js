/* =========================================
   NESTORA - JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // 1. MOBILE NAVIGATION
  // =====================================

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navigation.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

    // Close mobile menu after clicking a navigation link

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

      });

    });

    // Close menu if the user clicks outside it

    document.addEventListener("click", function (event) {

      const clickedInsideMenu = navigation.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        navigation.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }

    });

  }


  // =====================================
  // 2. PROPERTY CATEGORY FILTER
  // =====================================

  const filterButtons = document.querySelectorAll(".filter-btn");
  const propertyCards = document.querySelectorAll(".property-card");

  filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      // Remove active class from all buttons

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Activate selected button

      button.classList.add("active");

      // Get selected category

      const selectedCategory = button.dataset.filter;

      // Show or hide property cards

      propertyCards.forEach(function (card) {

        const cardCategory = card.dataset.category;

        if (
          selectedCategory === "all" ||
          selectedCategory === cardCategory
        ) {
          card.hidden = false;
        } else {
          card.hidden = true;
        }

      });

    });

  });


  // =====================================
  // 3. DEMO PROPERTY SEARCH FORM
  // =====================================

  const propertySearch = document.getElementById("propertySearch");

  if (propertySearch) {

    propertySearch.addEventListener("submit", function (event) {

      event.preventDefault();

      alert(
        "Thank you for exploring NESTORA! " +
        "Property search is a demo feature in this portfolio design."
      );

    });

  }


  // =====================================
  // 4. DEMO CONTACT FORM
  // =====================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      alert(
        "Thank you for visiting NESTORA! " +
        "This contact form is a visual demo and does not send messages."
      );

      contactForm.reset();

    });

  }


  // =====================================
  // 5. SMOOTH SCROLL FOR INTERNAL LINKS
  // =====================================

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetSection = document.querySelector(targetId);

      if (targetSection) {

        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  // =====================================
  // 6. FOOTER CURRENT YEAR
  // =====================================

  const copyrightText = document.querySelector(".footer-bottom p");

  if (copyrightText) {

    copyrightText.textContent =
      "© " + new Date().getFullYear() +
      " NESTORA. All Rights Reserved.";

  }


  // =====================================
  // 7. CONSOLE MESSAGE
  // =====================================

  console.log("NESTORA website loaded successfully!");

});