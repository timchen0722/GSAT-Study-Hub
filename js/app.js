/**
 * GSAT Study Hub - Main Application Logic
 */

(function() {
  'use strict';

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Show/hide back to top button
    if (window.scrollY > 500) {
      backToTop?.classList.add('show');
    } else {
      backToTop?.classList.remove('show');
    }
  });

  // Back to top click
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================
  // Mobile Nav Toggle
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  // Close mobile menu when clicking a link
  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  // ============================================
  // Tab System
  // ============================================
  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const buttons = tabsContainer.querySelectorAll('.tab-btn');
    const parent = tabsContainer.parentElement;
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.tab;

        // Deactivate all tabs
        buttons.forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Activate clicked tab
        btn.classList.add('active');
        const target = parent.querySelector(`#${targetId}`);
        if (target) target.classList.add('active');
      });
    });
  });

  // ============================================
  // Sidebar Active State (Intersection Observer)
  // ============================================
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  const sections = document.querySelectorAll('.content-section[id]');

  if (sections.length > 0 && sidebarLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));
  }

  // ============================================
  // Scroll Animation (Intersection Observer)
  // ============================================
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in, .animate-scale-in');

  if (animatedElements.length > 0) {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      animObserver.observe(el);
    });
  }

  // ============================================
  // KaTeX Auto-render
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }
  });

  // ============================================
  // Active Nav Link Highlight
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPage = href.split('/').pop();
      link.classList.remove('active');
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    }
  });

})();
