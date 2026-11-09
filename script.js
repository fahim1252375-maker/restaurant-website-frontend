const CONFIG = {
  restaurantName: "Cinnamon Restaurant & Party Center",
  category: "Restaurant",
  location: "East Subidbazar, Sylhet, Bangladesh",
  phone: "01758089822",
  phoneTel: "tel:+8801758089822",
  whatsappNumber: "8801758089822",
  facebookUrl: "https://www.facebook.com/TheCinnamonRestaurant/",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Cinnamon+Restaurant+%26+Party+Center+East+Subidbazar+Sylhet",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=East%20Subidbazar%2C%20Sylhet%2C%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  reviewsUrl: "https://www.facebook.com/TheCinnamonRestaurant/",
  images: {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    about: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    party: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80"
  },
  menuItems: [
    {
      id: "m-01",
      name: "Crispy Golden Calamari",
      category: "Starters",
      price: "৳ --",
      desc: "Delicately seasoned fried calamari served with zesty citrus garlic aioli and herbs.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-02",
      name: "Spiced Chicken Tikka Skewers",
      category: "Chicken",
      price: "৳ --",
      desc: "Tender chicken marinated in aromatic South Asian spices, flame-grilled to perfection.",
      image: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-03",
      name: "Traditional Sylheti Beef Bhuna",
      category: "Beef",
      price: "৳ --",
      desc: "Slow-simmered beef cooked with fragrant cloves, cinnamon quills, and rich caramelized onion gravy.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-04",
      name: "Royal Mutton Kacchi Biryani",
      category: "Rice & Biryani",
      price: "৳ --",
      desc: "Aromatic basmati rice layered with marinated tender meat, saffron, aloo, and subtle ghee aroma.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-05",
      name: "Grilled King Prawn Sizzler",
      category: "Seafood",
      price: "৳ --",
      desc: "Fresh tiger prawns tossed in coriander chili butter, served over a sizzling bell pepper medley.",
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-06",
      name: "Creamy Paneer Butter Masala",
      category: "Vegetarian",
      price: "৳ --",
      desc: "Velvety cottage cheese cubes simmered in creamy tomato gravy infused with fenugreek and butter.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-07",
      name: "Signature Butter Chicken",
      category: "Chicken",
      price: "৳ --",
      desc: "Succulent tandoori-roasted chicken pieces bathed in a luscious, mildly spiced silky tomato cream sauce.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-08",
      name: "Sizzling Garlic Beef Steak",
      category: "Beef",
      price: "৳ --",
      desc: "Tender cut beef steak glazed with roasted garlic rosemary butter and seasoned seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-09",
      name: "Saffron Vegetable Pulao",
      category: "Rice & Biryani",
      price: "৳ --",
      desc: "Fragrant long-grain rice gently tempered with saffron threads, cardamom pods, and garden vegetables.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-10",
      name: "Warm Cinnamon Molten Lava Cake",
      category: "Desserts",
      price: "৳ --",
      desc: "Rich dark cocoa cake with a decadent warm molten center, accompanied by vanilla bean cream.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-11",
      name: "Artisan Caramel Cappuccino",
      category: "Coffee",
      price: "৳ --",
      desc: "Freshly pulled espresso with textured micro-foam and a hint of house cinnamon caramel syrup.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-12",
      name: "Premium Sylheti Masala Tea",
      category: "Tea",
      price: "৳ --",
      desc: "Fresh estate tea leaves brewed with fresh ginger, cardamom, whole cinnamon, and creamy milk.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-13",
      name: "Fresh Mint Lemonade Splash",
      category: "Drinks",
      price: "৳ --",
      desc: "Refreshing cooler made with crushed garden mint leaves, freshly squeezed lime, and chilled sparkling water.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-14",
      name: "Grilled Fish Fillet in Lemon Butter",
      category: "Seafood",
      price: "৳ --",
      desc: "Pan-seared tender boneless fish with crushed peppercorns and aromatic caper lemon drizzle.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-15",
      name: "Tandoori Stuffed Mushroom Caps",
      category: "Starters",
      price: "৳ --",
      desc: "Plump button mushrooms stuffed with spiced cheese and herbs, roasted until golden.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-16",
      name: "Dal Makhani Royale",
      category: "Vegetarian",
      price: "৳ --",
      desc: "Whole black lentils slow-cooked overnight with creamy butter and gentle aromatic spices.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  galleryItems: [
    {
      id: "g-01",
      category: "Interior",
      title: "Warm Ambient Dining Hall",
      desc: "Comfortable seating with warm acoustic lighting and gold accents.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-02",
      category: "Food",
      title: "Chef Crafted Delicacies",
      desc: "Artful culinary presentation celebrating authentic flavors.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-03",
      category: "Party/Events",
      title: "Elegant Celebration Setting",
      desc: "Custom banquet arrangement tailored for memorable family moments.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-04",
      category: "Exterior",
      title: "Welcoming Restaurant Entrance",
      desc: "Conveniently accessible in East Subidbazar, Sylhet.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-05",
      category: "Dining",
      title: "Intimate Table Service",
      desc: "Thoughtfully spaced seating for family and group dining.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-06",
      category: "Food",
      title: "Sizzling Gourmet Specialties",
      desc: "Carefully selected halal meats and vegetarian selections.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-07",
      category: "Interior",
      title: "Private Dining Suite",
      desc: "Exclusive room setup for quiet family gatherings or business dinners.",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-08",
      category: "Party/Events",
      title: "Special Gathering Hall",
      desc: "Dedicated event space hosting birthdays and intimate parties.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-09",
      category: "Dining",
      title: "Artisan Coffee & Tea Corner",
      desc: "Relaxing atmosphere to enjoy warm desserts and beverages.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initScrollProgressBar();
  initNavigation();
  initMenu();
  initGallery();
  initReservationForm();
  initScrollReveals();
  initBackToTop();
  initButtonRipples();
});

function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.remove();
      }, 650);
    }, 400);
  });
}

function initScrollProgressBar() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + "%";
  }, { passive: true });
}

function initNavigation() {
  const header = document.querySelector(".header-nav");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerOverlay = document.getElementById("mobile-drawer-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopLinks = document.querySelectorAll(".nav-link");

  let lastScrollY = window.scrollY;
  let isNavHidden = false;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 40) {
      header?.classList.add("nav-scrolled");
    } else {
      header?.classList.remove("nav-scrolled");
    }
    if (currentScrollY > 300 && currentScrollY > lastScrollY && !isNavHidden) {
      header?.classList.add("nav-hidden");
      isNavHidden = true;
    } else if (currentScrollY < lastScrollY && isNavHidden) {
      header?.classList.remove("nav-hidden");
      isNavHidden = false;
    }

    lastScrollY = currentScrollY;
    highlightActiveLink();
  }, { passive: true });
  function openMobileMenu() {
    menuToggle?.classList.add("is-active");
    menuToggle?.setAttribute("aria-expanded", "true");
    mobileDrawer?.classList.add("is-open");
    drawerOverlay?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    menuToggle?.classList.remove("is-active");
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileDrawer?.classList.remove("is-open");
    drawerOverlay?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileDrawer?.classList.contains("is-open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  drawerOverlay?.addEventListener("click", closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer?.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });
  const sections = document.querySelectorAll("section[id]");

  function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

function initMenu() {
  const menuContainer = document.getElementById("menu-grid-container");
  const tabButtons = document.querySelectorAll(".menu-tab");

  if (!menuContainer) return;

  function renderCards(category = "All") {
    menuContainer.innerHTML = "";

    const itemsToDisplay = category === "All"
      ? CONFIG.menuItems
      : CONFIG.menuItems.filter(item => {
          if (category === "Main Course") {
            return item.category === "Chicken" || item.category === "Beef" || item.category === "Seafood" || item.category === "Vegetarian";
          }
          return item.category === category;
        });

    itemsToDisplay.forEach((item, idx) => {
      const card = document.createElement("article");
      card.className = "menu-card reveal is-visible";
      card.style.transitionDelay = `${(idx % 4) * 0.08}s`;

      card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="menu-card-img"
            loading="lazy"
            decoding="async"
            width="400"
            height="260"
          />
          <div class="menu-card-badges">
            <span class="badge badge-gold">${item.category}</span>
          </div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.name}</h3>
            <span class="menu-card-price">${item.price}</span>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-card-cat">${item.category}</span>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-order-enquire"
              data-item-name="${item.name}"
              aria-label="Enquire about ${item.name}"
            >
              Order / Enquire
            </button>
          </div>
        </div>
      `;

      menuContainer.appendChild(card);
    });
    document.querySelectorAll(".btn-order-enquire").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const itemName = btn.getAttribute("data-item-name") || "this menu item";
        const message = `Hello Cinnamon Restaurant & Party Center, I would like to enquire about ordering: ${itemName}. Please share current availability and pricing.`;
        const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

        showToast(`Opening WhatsApp enquiry for "${itemName}"...`);
        window.open(waUrl, "_blank", "noopener,noreferrer");
      });
    });
  }
  renderCards("All");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category") || "All";
      renderCards(category);
    });
  });
}

function initGallery() {
  const galleryGrid = document.getElementById("gallery-grid-container");
  const filterTabs = document.querySelectorAll(".gallery-tab");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!galleryGrid || !lightbox) return;

  let currentCategory = "All";
  let activeItems = [...CONFIG.galleryItems];
  let currentIndex = 0;

  function renderGallery(cat = "All") {
    currentCategory = cat;
    galleryGrid.innerHTML = "";

    activeItems = cat === "All"
      ? CONFIG.galleryItems
      : CONFIG.galleryItems.filter(item => item.category === cat);

    activeItems.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "gallery-item reveal is-visible";
      itemEl.style.transitionDelay = `${(index % 3) * 0.1}s`;
      itemEl.setAttribute("tabindex", "0");
      itemEl.setAttribute("role", "button");
      itemEl.setAttribute("aria-label", `View photo: ${item.title}`);

      itemEl.innerHTML = `
        <img
          src="${item.image}"
          alt="${item.title}"
          class="gallery-item-img"
          loading="lazy"
          decoding="async"
          width="400"
          height="280"
        />
        <div class="gallery-item-overlay">
          <span class="gallery-item-cat">${item.category}</span>
          <span class="gallery-item-caption">${item.title}</span>
        </div>
      `;

      itemEl.addEventListener("click", () => openLightbox(index));
      itemEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(itemEl);
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const item = activeItems[currentIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = `${item.title} - Cinnamon Restaurant`;
    lightboxCaption.textContent = `${item.title} - ${item.desc}`;
    lightboxCounter.textContent = `${currentIndex + 1} of ${activeItems.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % activeItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    updateLightboxContent();
  }
  closeBtn?.addEventListener("click", closeLightbox);
  nextBtn?.addEventListener("click", showNext);
  prevBtn?.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      showNext();
    } else if (e.key === "ArrowLeft") {
      showPrev();
    }
  });
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 45) {
      if (swipeDistance < 0) {
        showNext();
      } else {
        showPrev();
      }
    }
  }
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-category") || "All";
      renderGallery(cat);
    });
  });
  renderGallery("All");
}

function initReservationForm() {
  const form = document.getElementById("reservation-form");
  const dateInput = document.getElementById("res-date");

  if (!form) return;
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("res-name");
    const phoneInput = document.getElementById("res-phone");
    const emailInput = document.getElementById("res-email");
    const timeInput = document.getElementById("res-time");
    const guestsInput = document.getElementById("res-guests");
    const occasionInput = document.getElementById("res-occasion");
    const requestInput = document.getElementById("res-request");
    let isValid = true;

    function validateField(input, errorId, condition, errorMsg) {
      const errorEl = document.getElementById(errorId);
      if (!condition) {
        input.classList.add("is-invalid");
        if (errorEl) errorEl.textContent = errorMsg;
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
        if (errorEl) errorEl.textContent = "";
      }
    }

    validateField(
      nameInput,
      "err-name",
      nameInput.value.trim().length >= 2,
      "Please enter your full name."
    );

    validateField(
      phoneInput,
      "err-phone",
      phoneInput.value.trim().length >= 8,
      "Please enter a valid phone number (e.g. 01758089822)."
    );

    validateField(
      dateInput,
      "err-date",
      dateInput.value !== "",
      "Please select a reservation date."
    );

    validateField(
      timeInput,
      "err-time",
      timeInput.value !== "",
      "Please select preferred dining time."
    );

    validateField(
      guestsInput,
      "err-guests",
      guestsInput.value !== "" && parseInt(guestsInput.value, 10) >= 1,
      "Please specify number of guests."
    );

    if (!isValid) {
      showToast("Please fill in all required fields accurately.");
      return;
    }
    const reservationData = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput?.value.trim() || "Not provided",
      date: dateInput.value,
      time: timeInput.value,
      guests: guestsInput.value,
      occasion: occasionInput?.value || "Casual Dining",
      specialRequest: requestInput?.value.trim() || "None"
    };

    const formattedMessage =
`*Table Reservation Request*
-----------------------------
Restaurant: Cinnamon Restaurant & Party Center (East Subidbazar, Sylhet)
Name: ${reservationData.name}
Phone: ${reservationData.phone}
Email: ${reservationData.email}
Date: ${reservationData.date}
Time: ${reservationData.time}
Guests: ${reservationData.guests}
Occasion: ${reservationData.occasion}
Special Request: ${reservationData.specialRequest}
-----------------------------
(Sent from website reservation form)`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;

    showToast("Launching WhatsApp to send your reservation request...");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
    form.reset();
  });
}

function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function initButtonRipples() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      const rect = button.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("ripple-wave");

      const ripple = button.getElementsByClassName("ripple-wave")[0];
      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    });
  });
}

function showToast(message, duration = 4000) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold); flex-shrink: 0;">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, duration);
}
