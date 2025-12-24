// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Navbar scroll effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Hero Section Animations
const heroTimeline = gsap.timeline();

heroTimeline
  .to('.headline-line', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })
  .to('.hero-subheadline', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.trust-badges', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.6');

// Animate gradient orbs
gsap.to('.orb-1', {
  x: 100,
  y: 100,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.orb-2', {
  x: -80,
  y: -80,
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.orb-3', {
  x: 60,
  y: -60,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// Section Headlines Animation
gsap.utils.toArray('.section-headline').forEach(headline => {
  gsap.fromTo(headline, 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headline,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Demo Section Animation
gsap.fromTo('.demo-content',
  {
    opacity: 0,
    y: 60
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.demo-content',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

gsap.fromTo('.demo-box',
  {
    opacity: 0,
    scale: 0.9,
    y: 40
  },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.demo-content',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

gsap.fromTo('.demo-arrow',
  {
    opacity: 0,
    x: -20
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.demo-content',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

// Steps Animation
gsap.utils.toArray('.step').forEach((step, index) => {
  gsap.fromTo(step,
    {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Mode Cards Animation
gsap.utils.toArray('.mode-card').forEach((card, index) => {
  gsap.fromTo(card,
    {
      opacity: 0,
      y: 60,
      rotationY: 15
    },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 1,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Audience Cards Animation
gsap.utils.toArray('.audience-card').forEach((card, index) => {
  gsap.fromTo(card,
    {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.12,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Privacy Items Animation
gsap.utils.toArray('.privacy-item').forEach((item, index) => {
  gsap.fromTo(item,
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Testimonials Animation
gsap.utils.toArray('.testimonial').forEach((testimonial, index) => {
  gsap.fromTo(testimonial,
    {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.9
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: testimonial,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Pricing Card Animation
gsap.fromTo('.pricing-card',
  {
    opacity: 0,
    scale: 0.8,
    y: 60
  },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '.pricing-card',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

// Final CTA Animation
gsap.fromTo('.cta-headline',
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.final-cta',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

gsap.fromTo('.final-cta .btn-primary',
  {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    delay: 0.3,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '.final-cta',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  }
);

// Parallax effect for hero background
gsap.to('.hero-background', {
  y: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: 'power2.inOut'
      });
    }
  });
});

// Button hover animations
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('mouseenter', function() {
    gsap.to(this, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  button.addEventListener('mouseleave', function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Card hover animations
document.querySelectorAll('.mode-card, .audience-card, .privacy-item').forEach(card => {
  card.addEventListener('mouseenter', function() {
    gsap.to(this, {
      y: -8,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', function() {
    gsap.to(this, {
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
});

// Add ripple effect for CTA buttons (only for buttons, not links)
document.querySelectorAll('.btn-primary').forEach(button => {
  // Only add ripple effect if it's a button, not a link
  if (button.tagName === 'BUTTON') {
    button.addEventListener('click', function(e) {
      // Add a ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
});

// Add ScrollTrigger refresh on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// Legal Page Animations
if (document.querySelector('.legal-page')) {
  gsap.utils.toArray('.legal-section').forEach((section, index) => {
    gsap.fromTo(section,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Animate title
  gsap.fromTo('.legal-title',
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }
  );
}

// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// FAQ Animation
gsap.utils.toArray('.faq-item').forEach((item, index) => {
  gsap.fromTo(item,
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Initialize animations on load
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
