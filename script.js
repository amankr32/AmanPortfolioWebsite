/* ===========================
   script.js — Aman Kumar Portfolio
   =========================== */

(function () {
  'use strict';

  /* ── PAGE NAVIGATION ── */
  function showPage(id) {
    document.querySelectorAll('.page-section').forEach(function (el) {
      el.classList.remove('active');
    });
    document.querySelectorAll('.greedy-nav a, .mobile-nav a').forEach(function (el) {
      el.classList.remove('active');
    });
    var section = document.getElementById('page-' + id);
    if (section) section.classList.add('active');
    var desktopLink = document.getElementById('nav-' + id);
    if (desktopLink) desktopLink.classList.add('active');
    var mobileLink = document.getElementById('mnav-' + id);
    if (mobileLink) mobileLink.classList.add('active');
    closeMobileNav();
    if (window.innerWidth <= 768) {
      var content = document.querySelector('.content');
      if (content) content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ── MOBILE HAMBURGER ── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMobileNav() {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileNav) mobileNav.classList.remove('open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (mobileNav && mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && e.target !== hamburger) {
      closeMobileNav();
    }
  });

  /* ── NAV LINK CLICK HANDLERS ── */
  function bindNavLinks(selector, prefix) {
    document.querySelectorAll(selector).forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var id = this.id.replace(prefix, '');
        showPage(id);
      });
    });
  }

  bindNavLinks('.greedy-nav a', 'nav-');
  bindNavLinks('.mobile-nav a', 'mnav-');

  var siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    siteTitle.addEventListener('click', function (e) {
      e.preventDefault();
      showPage('about');
    });
  }

  /* ── CTA BUTTONS ── */
  var ctaProjects = document.getElementById('cta-projects');
  if (ctaProjects) {
    ctaProjects.addEventListener('click', function (e) {
      e.preventDefault();
      showPage('projects');
    });
  }

  var ctaCv = document.getElementById('cta-cv');
  if (ctaCv) {
    ctaCv.addEventListener('click', function (e) {
      e.preventDefault();
      var link = document.createElement('a');
      link.href = 'CV26_AmanKumar_20040827.pdf';
      link.download = 'AmanKumar_Resume.pdf';
      link.click();
    });
  }

  /* ── PROFILE IMAGE FALLBACK ── */
  function setupAvatarFallback(imgId, fallbackId) {
    var img = document.getElementById(imgId);
    var fallback = document.getElementById(fallbackId);
    if (img && fallback) {
      img.addEventListener('error', function () {
        img.style.display = 'none';
        fallback.style.display = 'flex';
      });
    }
  }

  setupAvatarFallback('sidebar-avatar', 'sidebar-fallback');
  setupAvatarFallback('mobile-avatar', 'mobile-fallback');

  /* ── INIT ── */
  showPage('about');
})();
