/* ORGIA.BD — Header Component */
(function () {
  'use strict';

  function getCurrentPage() {
    const body = document.body;
    if (body.dataset.page) return body.dataset.page;
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path.replace('.html', '') || 'index';
  }

  function buildNavLinks(currentPage) {
    return ORGIA_DATA.nav.map(function (item) {
      const isActive = currentPage === item.key || (currentPage === 'index' && item.key === 'discover');
      const activeClass = isActive ? 'text-gold border-b border-gold' : 'text-charcoal hover:text-gold';
      return '<a href="' + item.href + '" class="nav-link ' + activeClass + ' text-[10px] lg:text-xs tracking-widest font-medium whitespace-nowrap transition-colors duration-300 pb-1" data-nav="' + item.key + '">' + item.label + '</a>';
    }).join('');
  }

  function buildMobileNavLinks(currentPage) {
    return ORGIA_DATA.nav.map(function (item) {
      const isActive = currentPage === item.key || (currentPage === 'index' && item.key === 'discover');
      const activeClass = isActive ? 'text-gold bg-beige/50' : 'text-charcoal hover:text-gold hover:bg-beige/30';
      return '<a href="' + item.href + '" class="mobile-nav-link ' + activeClass + ' block px-4 py-3 text-sm tracking-widest font-medium transition-colors duration-300" data-nav="' + item.key + '">' + item.label + '</a>';
    }).join('');
  }

  function renderHeader() {
    const container = document.getElementById('site-header');
    if (!container) return;

    const currentPage = getCurrentPage();

    container.innerHTML =
      '<header class="bg-white text-charcoal sticky top-0 z-50 border-b border-charcoal/10 shadow-sm">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
          '<div class="flex items-center justify-between h-16 lg:h-20">' +
            '<a href="index.html" class="flex-shrink-0 group">' +
              '<div class="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal tracking-wide group-hover:text-gold transition-colors">ORGIA.BD</div>' +
              '<div class="text-[8px] sm:text-[9px] tracking-[0.2em] text-charcoal/60 font-sans mt-0.5">FASHION &bull; CULTURE &bull; CREATIVITY</div>' +
            '</a>' +
            '<nav class="hidden xl:flex items-center gap-4 2xl:gap-6 flex-1 justify-center mx-6" aria-label="Main navigation">' +
              buildNavLinks(currentPage) +
            '</nav>' +
            '<div class="flex items-center gap-3 sm:gap-5">' +
              '<button id="search-toggle" type="button" class="text-charcoal hover:text-gold transition-colors p-2" aria-label="Search">' +
                '<i class="fas fa-search text-sm sm:text-base"></i>' +
              '</button>' +
              '<a href="contact.html" class="hidden sm:block text-charcoal hover:text-gold transition-colors p-2" aria-label="Account">' +
                '<i class="fas fa-user text-sm sm:text-base"></i>' +
              '</a>' +
              '<a href="collections.html" class="hidden sm:block text-charcoal hover:text-gold transition-colors p-2" aria-label="Shopping bag">' +
                '<i class="fas fa-shopping-bag text-sm sm:text-base"></i>' +
              '</a>' +
              '<button id="mobile-menu-toggle" type="button" class="xl:hidden text-charcoal hover:text-gold transition-colors p-2" aria-label="Toggle menu" aria-expanded="false">' +
                '<i class="fas fa-bars text-lg" id="menu-icon-open"></i>' +
                '<i class="fas fa-times text-lg hidden" id="menu-icon-close"></i>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div id="mobile-menu" class="xl:hidden hidden bg-white border-t border-charcoal/10 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">' +
          '<nav class="py-2" aria-label="Mobile navigation">' +
            buildMobileNavLinks(currentPage) +
          '</nav>' +
          '<div class="flex items-center gap-6 px-4 py-4 border-t border-charcoal/10">' +
            '<a href="contact.html" class="text-charcoal hover:text-gold transition-colors"><i class="fas fa-user mr-2"></i>Account</a>' +
            '<a href="collections.html" class="text-charcoal hover:text-gold transition-colors"><i class="fas fa-shopping-bag mr-2"></i>Shop</a>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div id="search-modal" class="fixed inset-0 z-[60] hidden" role="dialog" aria-modal="true" aria-label="Search">' +
        '<div id="search-backdrop" class="absolute inset-0 bg-black/80"></div>' +
        '<div class="relative max-w-2xl mx-auto mt-20 sm:mt-32 px-4">' +
          '<div class="bg-white rounded-sm shadow-2xl p-6 sm:p-8">' +
            '<div class="flex items-center justify-between mb-6">' +
              '<h2 class="font-serif text-2xl text-charcoal">Search ORGIA.BD</h2>' +
              '<button id="search-close" type="button" class="text-charcoal/60 hover:text-charcoal p-2" aria-label="Close search">' +
                '<i class="fas fa-times text-xl"></i>' +
              '</button>' +
            '</div>' +
            '<form id="search-form" class="relative">' +
              '<input type="search" id="search-input" placeholder="Search designers, collections, events..." class="w-full border border-charcoal/20 px-4 py-3 pr-12 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold font-sans text-sm" autocomplete="off">' +
              '<button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-gold/80" aria-label="Submit search">' +
                '<i class="fas fa-search"></i>' +
              '</button>' +
            '</form>' +
            '<div id="search-results" class="mt-4 max-h-64 overflow-y-auto hidden"></div>' +
            '<p class="mt-4 text-xs text-charcoal/50">Try searching for designers, collections, or fashion events</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', renderHeader);
})();
