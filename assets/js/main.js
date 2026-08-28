/* ORGIA.BD — Main JavaScript */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initSearch();
    initHeroCarousel();
    initSmoothScroll();
    initBackToTop();
    initNewsletterForm();
    initFormValidation();
    initFilters();
    initCategoryTabs();
    initPagination();
    initDesignerCarousel();
    initImageUpload();
    initActiveNav();
  });

  /* Mobile Navigation */
  function initMobileNav() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!isOpen));
      if (iconOpen) iconOpen.classList.toggle('hidden', !isOpen);
      if (iconClose) iconClose.classList.toggle('hidden', isOpen);
      document.body.classList.toggle('overflow-hidden', !isOpen);
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  /* Search Modal */
  function initSearch() {
    const toggle = document.getElementById('search-toggle');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-close');
    const backdrop = document.getElementById('search-backdrop');
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!toggle || !modal) return;

    function openSearch() {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      setTimeout(function () { if (input) input.focus(); }, 100);
    }

    function closeSearch() {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      if (input) input.value = '';
      if (results) { results.classList.add('hidden'); results.innerHTML = ''; }
    }

    toggle.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    if (backdrop) backdrop.addEventListener('click', closeSearch);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeSearch();
    });

    if (form && input && results) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        performSearch(input.value.trim(), results);
      });

      input.addEventListener('input', function () {
        const q = input.value.trim();
        if (q.length >= 2) performSearch(q, results);
        else { results.classList.add('hidden'); results.innerHTML = ''; }
      });
    }
  }

  function performSearch(query, resultsEl) {
    const q = query.toLowerCase();
    const matches = [];

    ORGIA_DATA.designers.forEach(function (d) {
      if (d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)) {
        matches.push({ type: 'Designer', title: d.name, subtitle: d.category, href: 'designer-detail.html?id=' + d.id });
      }
    });

    ORGIA_DATA.collections.forEach(function (c) {
      if (c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) {
        matches.push({ type: 'Collection', title: c.title, subtitle: c.category, href: 'collection-detail.html?id=' + c.id });
      }
    });

    ORGIA_DATA.events.forEach(function (ev) {
      if (ev.title.toLowerCase().includes(q)) {
        matches.push({ type: 'Event', title: ev.title, subtitle: ev.date, href: 'fashion-event-detail.html?id=' + ev.id });
      }
    });

    ORGIA_DATA.research.forEach(function (r) {
      if (r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)) {
        matches.push({ type: 'Research', title: r.title, subtitle: r.category, href: 'research-detail.html?id=' + r.id });
      }
    });

    if (matches.length === 0) {
      resultsEl.innerHTML = '<p class="text-sm text-charcoal/60 py-4">No results found for "' + query + '"</p>';
    } else {
      resultsEl.innerHTML = matches.slice(0, 8).map(function (m) {
        return '<a href="' + m.href + '" class="block py-3 px-2 border-b border-charcoal/10 hover:bg-beige/50 transition-colors">' +
          '<span class="text-[10px] tracking-widest text-gold uppercase">' + m.type + '</span>' +
          '<p class="text-sm font-medium text-charcoal mt-0.5">' + m.title + '</p>' +
          '<p class="text-xs text-charcoal/50">' + m.subtitle + '</p></a>';
      }).join('');
    }
    resultsEl.classList.remove('hidden');
  }

  /* Hero Carousel */
  function initHeroCarousel() {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('[data-slide]');
    const dots = carousel.querySelectorAll('[data-dot]');
    let current = 0;
    let interval;

    function goTo(index) {
      slides.forEach(function (s, i) {
        s.classList.toggle('opacity-100', i === index);
        s.classList.toggle('opacity-0', i !== index);
        s.classList.toggle('z-10', i === index);
        s.classList.toggle('z-0', i !== index);
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('bg-gold', i === index);
        d.classList.toggle('bg-white/50', i !== index);
      });
      current = index;
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        resetInterval();
      });
    });

    function next() { goTo((current + 1) % slides.length); }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(next, 6000);
    }

    if (slides.length > 0) {
      goTo(0);
      resetInterval();
    }
  }

  /* Designer Carousel on Homepage */
  function initDesignerCarousel() {
    const track = document.getElementById('designer-carousel-track');
    const prev = document.getElementById('designer-prev');
    const next = document.getElementById('designer-next');
    if (!track) return;

    let position = 0;
    const cardWidth = 220;

    function updateButtons() {
      const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
      if (prev) prev.classList.toggle('opacity-30', position <= 0);
      if (next) next.classList.toggle('opacity-30', position >= maxScroll);
    }

    if (prev) prev.addEventListener('click', function () {
      position = Math.max(0, position - cardWidth * 2);
      track.style.transform = 'translateX(-' + position + 'px)';
      updateButtons();
    });

    if (next) next.addEventListener('click', function () {
      const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
      position = Math.min(maxScroll, position + cardWidth * 2);
      track.style.transform = 'translateX(-' + position + 'px)';
      updateButtons();
    });

    updateButtons();
  }

  /* Smooth Scroll */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* Back to Top */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.remove('opacity-0', 'invisible');
        btn.classList.add('opacity-100', 'visible');
      } else {
        btn.classList.add('opacity-0', 'invisible');
        btn.classList.remove('opacity-100', 'visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Newsletter Validation */
  function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email');
      const error = document.getElementById('newsletter-error');
      if (!email || !error) return;

      const val = email.value.trim();
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        error.textContent = 'Please enter a valid email address.';
        error.classList.remove('hidden');
        email.classList.add('border-red-400');
        return;
      }

      error.classList.add('hidden');
      email.classList.remove('border-red-400');
      email.value = '';
      showToast('Thank you for subscribing!');
    });
  }

  /* Form Validation */
  function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) validateForm(contactForm, {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      subject: { required: true, minLength: 3 },
      message: { required: true, minLength: 10 }
    });

    const customOrderForm = document.getElementById('custom-order-form');
    if (customOrderForm) validateForm(customOrderForm, {
      fullName: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      garmentType: { required: true },
      budget: { required: true },
      fabric: { required: true },
      deadline: { required: true },
      requirements: { required: true, minLength: 20 }
    });

    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) validateForm(quoteForm, {
      companyName: { required: true, minLength: 2 },
      contactName: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      productType: { required: true },
      quantity: { required: true },
      message: { required: true, minLength: 10 }
    });

    const eventForm = document.getElementById('event-registration-form');
    if (eventForm) validateForm(eventForm, {
      fullName: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      ticketType: { required: true }
    });
  }

  function validateForm(form, rules) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      Object.keys(rules).forEach(function (field) {
        const input = form.querySelector('[name="' + field + '"]');
        const errorEl = form.querySelector('[data-error="' + field + '"]');
        if (!input) return;

        const rule = rules[field];
        const val = input.type === 'checkbox' ? input.checked : input.value.trim();
        let error = '';

        if (rule.required && !val) error = 'This field is required.';
        else if (rule.minLength && val.length < rule.minLength) error = 'Minimum ' + rule.minLength + ' characters required.';
        else if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = 'Please enter a valid email.';
        else if (rule.phone && !/^[\d\s\-+()]{10,}$/.test(val)) error = 'Please enter a valid phone number.';

        if (error) {
          valid = false;
          input.classList.add('border-red-400');
          if (errorEl) { errorEl.textContent = error; errorEl.classList.remove('hidden'); }
        } else {
          input.classList.remove('border-red-400');
          if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        }
      });

      if (valid) {
        showToast('Form submitted successfully! We will be in touch soon.');
        form.reset();
      }
    });

    form.querySelectorAll('input, textarea, select').forEach(function (input) {
      input.addEventListener('input', function () {
        this.classList.remove('border-red-400');
        const errorEl = form.querySelector('[data-error="' + this.name + '"]');
        if (errorEl) errorEl.classList.add('hidden');
      });
    });
  }

  /* Filters */
  function initFilters() {
    document.querySelectorAll('[data-filter-group]').forEach(function (group) {
      const buttons = group.querySelectorAll('[data-filter]');
      const targetSelector = group.dataset.filterTarget;
      const target = document.querySelector(targetSelector);
      if (!target) return;

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const filter = btn.dataset.filter;
          buttons.forEach(function (b) {
            b.classList.remove('bg-black', 'text-white', 'border-black');
            b.classList.add('bg-white', 'text-charcoal', 'border-charcoal/20');
          });
          btn.classList.add('bg-black', 'text-white', 'border-black');
          btn.classList.remove('bg-white', 'text-charcoal', 'border-charcoal/20');

          target.querySelectorAll('[data-category]').forEach(function (item) {
            const show = filter === 'all' || item.dataset.category === filter;
            item.classList.toggle('hidden', !show);
          });
        });
      });
    });

    const designerSearch = document.getElementById('designer-search');
    if (designerSearch) {
      designerSearch.addEventListener('input', function () {
        const q = this.value.toLowerCase();
        document.querySelectorAll('[data-designer-card]').forEach(function (card) {
          const name = card.dataset.name || '';
          const category = card.dataset.category || '';
          const location = card.dataset.location || '';
          const match = name.includes(q) || category.includes(q) || location.includes(q);
          card.classList.toggle('hidden', !match);
        });
      });
    }

    const eventFilter = document.getElementById('event-status-filter');
    if (eventFilter) {
      eventFilter.addEventListener('change', function () {
        const type = this.value;
        document.querySelectorAll('[data-event-type]').forEach(function (card) {
          card.classList.toggle('hidden', type !== 'all' && card.dataset.eventType !== type);
        });
      });
    }
  }

  /* Category Tabs */
  function initCategoryTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(function (group) {
      const tabs = group.querySelectorAll('[data-tab]');
      const panels = document.querySelectorAll('[data-tab-panel]');
      const groupName = group.dataset.tabGroup;

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          const target = tab.dataset.tab;
          tabs.forEach(function (t) {
            t.classList.remove('border-gold', 'text-gold');
            t.classList.add('border-transparent', 'text-charcoal/60');
          });
          tab.classList.add('border-gold', 'text-gold');
          tab.classList.remove('border-transparent', 'text-charcoal/60');

          panels.forEach(function (panel) {
            if (panel.dataset.tabPanel === groupName) {
              panel.classList.toggle('hidden', panel.dataset.tab !== target);
            }
          });
        });
      });
    });
  }

  /* Pagination */
  function initPagination() {
    const grid = document.getElementById('designer-grid');
    const pagination = document.getElementById('designer-pagination');
    if (!grid || !pagination) return;

    const cards = grid.querySelectorAll('[data-designer-card]');
    const perPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(cards.length / perPage);

    function showPage(page) {
      currentPage = page;
      cards.forEach(function (card, i) {
        const show = i >= (page - 1) * perPage && i < page * perPage;
        card.classList.toggle('hidden', !show);
      });
      renderPagination();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderPagination() {
      let html = '';
      for (let i = 1; i <= totalPages; i++) {
        const active = i === currentPage ? 'bg-black text-white' : 'bg-white text-charcoal hover:bg-beige';
        html += '<button type="button" data-page="' + i + '" class="w-10 h-10 border border-charcoal/20 text-sm font-medium ' + active + ' transition-colors">' + i + '</button>';
      }
      pagination.innerHTML = html;
      pagination.querySelectorAll('[data-page]').forEach(function (btn) {
        btn.addEventListener('click', function () { showPage(parseInt(btn.dataset.page)); });
      });
    }

    showPage(1);
  }

  /* Image Upload Preview */
  function initImageUpload() {
    const input = document.getElementById('reference-image');
    const preview = document.getElementById('image-preview');
    if (!input || !preview) return;

    input.addEventListener('change', function () {
      preview.innerHTML = '';
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.innerHTML = '<img src="' + e.target.result + '" alt="Reference image preview" class="w-full h-48 object-cover rounded-sm">';
        };
        reader.readAsDataURL(this.files[0]);
      }
    });
  }

  /* Active Nav Detection */
  function initActiveNav() {
    const page = document.body.dataset.page || 'index';
    document.querySelectorAll('[data-nav]').forEach(function (link) {
      const key = link.dataset.nav;
      const isActive = page === key || (page === 'index' && key === 'discover') ||
        (page === 'designer-detail' && key === 'designers') ||
        (page === 'collection-detail' && key === 'collections') ||
        (page === 'fashion-event-detail' && key === 'fashion-events') ||
        (page === 'research-detail' && key === 'creative-research');
      if (isActive) {
        link.classList.add('text-gold');
        link.classList.remove('text-white', 'text-charcoal/60');
      }
    });
  }

  /* Toast Notification */
  function showToast(message) {
    const existing = document.getElementById('orgia-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'orgia-toast';
    toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-charcoal text-white px-6 py-3 text-sm z-[70] shadow-lg transition-opacity duration-300';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('opacity-0');
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  window.ORGIA = { showToast: showToast };
})();
