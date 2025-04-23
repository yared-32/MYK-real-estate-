// Dummy data for properties, agents, and testimonials
const properties = [
  {
    id: 1,
    title: "Modern Lakefront Villa",
    address: "123 Lakeview Bahir Dar, FL 32801",
    price: 8500000,
    bedroomCount: 4,
    bathroomCount: 3,
    squareFeet: 2800,
    propertyType: "house",
    listingType: "For Sale",
    isFeatured: true,
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    description: "This stunning lakefront villa offers breathtaking views and luxury amenities including a private dock, infinity pool, and gourmet kitchen. Perfect for entertaining and enjoying the Bahir Dar lifestyle."
  },
  {
    id: 2,
    title: "Contemporary Suburban Home",
    address: "456 Gerji, Addis Ababa, FL 33602",
    price: 5500000,
    bedroomCount: 3,
    bathroomCount: 2,
    squareFeet: 1950,
    propertyType: "house",
    listingType: "For Sale",
    isFeatured: true,
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "This beautiful modern home in a quiet suburban neighborhood features an open floor plan, updated kitchen with stainless steel appliances, and a spacious backyard with a covered patio."
  },
  {
    id: 3,
    title: "Downtown Luxury Condo",
    address: "789 Bole , Addis Ababa, FL 33101",
    price: 7200000,
    bedroomCount: 2,
    bathroomCount: 2,
    squareFeet: 1500,
    propertyType: "condo",
    listingType: "For Sale",
    isFeatured: true,
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2135&q=80",
    description: "Luxurious condo in the heart of downtown with stunning city views, high-end finishes, floor-to-ceiling windows, and access to premium building amenities including a rooftop pool and fitness center."
  },
  {
    id: 4,
    title: "Beachfront Apartment",
    address: "101  Hawassa, FL 32099",
    price: 4500000,
    bedroomCount: 2,
    bathroomCount: 2,
    squareFeet: 1200,
    propertyType: "apartment",
    listingType: "For Sale",
    isFeatured: false,
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Wake up to stunning ocean views in this beachfront apartment. Features include a renovated kitchen, spacious balcony, and direct beach access. Walking distance to local shops and restaurants."
  },
  {
    id: 5,
    title: "Historic Townhouse",
    address: "222 , Mekele, FL 32084",
    price: 6750000,
    bedroomCount: 3,
    bathroomCount: 2.5,
    squareFeet: 1800,
    propertyType: "townhouse",
    listingType: "For Sale",
    isFeatured: false,
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    description: "Charming townhouse in the historic district with original architectural details, modern updates, and a private courtyard. Close to landmarks, restaurants, and shopping."
  },
  {
    id: 6,
    title: "Golf Course Estate",
    address: "333 Koye, Addis Ababa, FL 34102",
    price: 12500000,
    bedroomCount: 5,
    bathroomCount: 4,
    squareFeet: 3500,
    propertyType: "house",
    listingType: "For Sale",
    isFeatured: false,
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Expansive estate home overlooking the prestigious golf course. Features include a gourmet kitchen, home theater, wine cellar, resort-style pool, and outdoor kitchen perfect for entertaining."
  }
];

const agents = [
  {
    id: 1,
    name: "Yared Yaregal",
    title: " Real Estate Owner and Boss",
    phone: "251-123-456-78",
    email: "yared@MYK.com",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2149&q=80",
    description: "With over 15 days of experience in the MYK real estate market.",
    facebook: "yaredyaregal",
    twitter: "yaredyaregal",
    instagram: "yaredyaregal",
    linkedin: "yaredyaregal"
  },
  {
    id: 2,
    name: "Mekdes A.",
    title: "Luxury Property Specialist ",
    phone: "555-987-6543",
    email: "mekdes@MYK.com",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Specializing in high-end properties and providing concierge service.",
    facebook: "mekdes",
    twitter: "mekdes",
    instagram: "mekdes",
    linkedin: "mekdes"
  },
  {
    id: 3,
    name: "Kirubeal A.",
    title: "Commercial Real Estate Agent",
    phone: "555-234-5678",
    email: "kirubeal@MYK.com",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Expert in commercial properties and investment opportunities.",
    facebook: "kirubeal",
    twitter: "kirubeal",
    instagram: "kirubeal",
    linkedin: "kirubeal"
  },
  {
    id: 4,
    name: "kisanet A.",
    title: "First-Time Homebuyer Specialist",
    phone: "555-345-6789",
    email: "kisanet@MYK.com",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    description: "Dedicated to helping first-time buyers navigate the purchase process.",
    facebook: "kisanet",
    twitter: "kisanet",
    instagram: "kisanet",
    linkedin: "kisanet"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Eyosiyas",
    position: "Home Buyers",
    comment: "Working with MYK was an incredible experience. Yared Yaregal helped us find our dream home within our budget, and made the entire process smooth and stress-free.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
  },
  {
    id: 2,
    name: "Niya Adnan",
    position: "Property Seller",
    comment: "Mekides sold our property in just two weeks, and for above asking price! Her market knowledge and staging advice were invaluable. Highly recommend!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Beti & Nati",
    position: "Investors",
    comment: "Yared Yaregal has been our go-to agent for all our investment properties. Kirubeal His expertise in the commercial market has helped us build a profitable portfolio.",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
  }
];

// Format price to USD
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
}

// Format number with commas
function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize property cards
  const featuredPropertiesGrid = document.getElementById('featured-properties-grid');
  if (featuredPropertiesGrid) {
    const featuredProperties = properties.filter(property => property.isFeatured);
    displayProperties(featuredProperties, featuredPropertiesGrid);
  }

  // Initialize agent cards
  const agentsGrid = document.getElementById('agents-grid');
  if (agentsGrid) {
    displayAgents(agents.slice(0, 4), agentsGrid);
  }

  // Initialize testimonial cards
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (testimonialsGrid) {
    displayTestimonials(testimonials, testimonialsGrid);
  }

  // Property search functionality
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', handlePropertySearch);
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
});

// Display properties in grid
function displayProperties(properties, container) {
  container.innerHTML = '';
  
  properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    propertyCard.dataset.id = property.id;
    
    let badges = '';
    if (property.isFeatured) {
      badges += `<div class="property-badge">Featured</div>`;
    }
    if (property.isNew) {
      badges += `<div class="property-badge new">New</div>`;
    }
    
    propertyCard.innerHTML = `
      <div class="property-image">
        <img src="${property.imageUrl}" alt="${property.title}">
        ${badges}
        <div class="favorite-btn" onclick="toggleFavorite(event, ${property.id})">
          <i class="far fa-heart"></i>
        </div>
      </div>
      <div class="property-content">
        <div>
          <span class="property-price">${formatPrice(property.price)}</span>
          <span class="property-tag">${property.listingType}</span>
        </div>
        <h3 class="property-title">${property.title}</h3>
        <p class="property-address">
          <i class="fas fa-map-marker-alt"></i> ${property.address}
        </p>
        <div class="property-features">
          <span><i class="fas fa-bed"></i> ${property.bedroomCount} Beds</span>
          <span><i class="fas fa-bath"></i> ${property.bathroomCount} Baths</span>
          <span><i class="fas fa-ruler-combined"></i> ${formatNumber(property.squareFeet)} sqft</span>
        </div>
      </div>
    `;
    
    propertyCard.addEventListener('click', function(e) {
      if (!e.target.closest('.favorite-btn')) {
        showPropertyDetails(property.id);
      }
    });
    
    container.appendChild(propertyCard);
  });
}

// Display agents in grid
function displayAgents(agents, container) {
  container.innerHTML = '';
  
  agents.forEach(agent => {
    const agentCard = document.createElement('div');
    agentCard.className = 'agent-card';
    
    let socialLinks = '';
    if (agent.facebook) {
      socialLinks += `<a href="https://facebook.com/${agent.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>`;
    }
    if (agent.twitter) {
      socialLinks += `<a href="https://twitter.com/${agent.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>`;
    }
    if (agent.instagram) {
      socialLinks += `<a href="https://instagram.com/${agent.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>`;
    }
    if (agent.linkedin) {
      socialLinks += `<a href="https://linkedin.com/in/${agent.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>`;
    }
    
    agentCard.innerHTML = `
      <div class="agent-image">
        <img src="${agent.imageUrl}" alt="${agent.name}">
      </div>
      <div class="agent-content">
        <h3 class="agent-name">${agent.name}</h3>
        <p class="agent-title">${agent.title}</p>
        <p class="agent-description">${agent.description}</p>
        <div class="agent-social">
          ${socialLinks}
        </div>
      </div>
    `;
    
    container.appendChild(agentCard);
  });
}

// Display testimonials in grid
function displayTestimonials(testimonials, container) {
  container.innerHTML = '';
  
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    
    // Create star rating
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= testimonial.rating) {
        starsHtml += '<i class="fas fa-star"></i>';
      } else if (i - 0.5 <= testimonial.rating) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
      } else {
        starsHtml += '<i class="far fa-star"></i>';
      }
    }
    
    testimonialCard.innerHTML = `
      <div class="rating">
        ${starsHtml}
      </div>
      <p class="testimonial-text">"${testimonial.comment}"</p>
      <div class="testimonial-author">
        <div class="author-image">
          <img src="${testimonial.imageUrl}" alt="${testimonial.name}">
        </div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    `;
    
    container.appendChild(testimonialCard);
  });
}

// Toggle property favorite
function toggleFavorite(event, propertyId) {
  event.stopPropagation();
  const favoriteBtn = event.currentTarget;
  favoriteBtn.classList.toggle('active');
  
  const heartIcon = favoriteBtn.querySelector('i');
  if (favoriteBtn.classList.contains('active')) {
    heartIcon.classList.replace('far', 'fas');
  } else {
    heartIcon.classList.replace('fas', 'far');
  }
}

// Handle property search
function handlePropertySearch() {
  const location = document.getElementById('location').value;
  const propertyType = document.getElementById('property-type').value;
  const priceRange = document.getElementById('price-range').value;
  
  // In a real application, this would redirect to search results page
  // For demo, we'll just show an alert
  alert(`Searching for properties with:\nLocation: ${location || 'Any'}\nType: ${propertyType || 'Any'}\nPrice Range: ${priceRange || 'Any'}`);
  
  // Alternatively, we could build a query string and redirect:
  // window.location.href = `properties.html?location=${encodeURIComponent(location)}&type=${propertyType}&price=${priceRange}`;
}

// Show property details in modal
function showPropertyDetails(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  if (!property) return;
  
  const modal = document.getElementById('property-modal');
  const propertyDetails = document.getElementById('property-details');
  
  // Find the agent for this property (randomly assigned for demo)
  const agent = agents[propertyId % agents.length];
  
  propertyDetails.innerHTML = `
    <div class="property-details-container">
      <div>
        <div class="property-details-image">
          <img src="${property.imageUrl}" alt="${property.title}">
        </div>
        <div class="property-details-info">
          <h2>${property.title}</h2>
          <p class="property-details-address">
            <i class="fas fa-map-marker-alt"></i> ${property.address}
          </p>
          <div class="property-details-meta">
            <div class="meta-item">
              <i class="fas fa-bed"></i>
              <span class="meta-label">Bedrooms</span>
              <span class="meta-value">${property.bedroomCount}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-bath"></i>
              <span class="meta-label">Bathrooms</span>
              <span class="meta-value">${property.bathroomCount}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-ruler-combined"></i>
              <span class="meta-label">Area</span>
              <span class="meta-value">${formatNumber(property.squareFeet)} sqft</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-home"></i>
              <span class="meta-label">Type</span>
              <span class="meta-value">${property.propertyType}</span>
            </div>
          </div>
          <div class="property-description">
            <h3>Description</h3>
            <p>${property.description}</p>
          </div>
          <div>
            <h3>Features</h3>
            <div class="property-features-list">
              <div class="feature-item"><i class="fas fa-check"></i> Air Conditioning</div>
              <div class="feature-item"><i class="fas fa-check"></i> Heating</div>
              <div class="feature-item"><i class="fas fa-check"></i> Parking</div>
              <div class="feature-item"><i class="fas fa-check"></i> Fireplace</div>
              <div class="feature-item"><i class="fas fa-check"></i> Security System</div>
              <div class="feature-item"><i class="fas fa-check"></i> Washer/Dryer</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="agent-sidebar">
          <div class="agent-profile-pic">
            <img src="${agent.imageUrl}" alt="${agent.name}">
          </div>
          <h3>${agent.name}</h3>
          <p class="agent-title">${agent.title}</p>
          <div class="contact-buttons">
            <a href="tel:${agent.phone}" class="contact-btn call-btn">
              <i class="fas fa-phone-alt"></i> Call
            </a>
            <a href="mailto:${agent.email}" class="contact-btn email-btn">
              <i class="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
        <div class="contact-form">
          <h3>Contact Us</h3>
          <form id="property-inquiry-form">
            <div class="form-group">
              <label>Name <span class="form-required">*</span></label>
              <input type="text" required>
            </div>
            <div class="form-group">
              <label>Email <span class="form-required">*</span></label>
              <input type="email" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel">
            </div>
            <div class="form-group">
              <label>Message <span class="form-required">*</span></label>
              <textarea rows="4" required></textarea>
            </div>
            <button type="submit" class="btn primary-btn" style="width:100%;">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  // Handle contact form submission
  const inquiryForm = document.getElementById('property-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your inquiry! An agent will contact you shortly.');
      modal.style.display = 'none';
    });
  }
  
  modal.style.display = 'block';
  
  // Close modal functionality
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}