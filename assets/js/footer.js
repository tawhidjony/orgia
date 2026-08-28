/* ORGIA.BD — Footer Component */
(function () {
  'use strict';

  function renderFooter() {
    const container = document.getElementById('site-footer');
    if (!container) return;

    container.innerHTML =
      '<footer class="bg-charcoal text-white">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">' +
          '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">' +
            '<div class="sm:col-span-2 lg:col-span-1">' +
              '<a href="index.html" class="inline-block">' +
                '<div class="font-serif text-2xl text-gold tracking-wide">ORGIA.BD</div>' +
                '<div class="text-[9px] tracking-[0.2em] text-white/60 mt-1">FASHION &bull; CULTURE &bull; CREATIVITY</div>' +
              '</a>' +
              '<p class="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">The premier destination for Bangladeshi fashion, connecting designers, artisans, and global fashion enthusiasts.</p>' +
              '<div class="flex items-center gap-4 mt-6">' +
                '<a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" aria-label="Facebook"><i class="fab fa-facebook-f text-sm"></i></a>' +
                '<a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" aria-label="Instagram"><i class="fab fa-instagram text-sm"></i></a>' +
                '<a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" aria-label="Twitter"><i class="fab fa-twitter text-sm"></i></a>' +
                '<a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" aria-label="LinkedIn"><i class="fab fa-linkedin-in text-sm"></i></a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h3 class="font-serif text-lg text-gold mb-6">Quick Links</h3>' +
              '<ul class="space-y-3 text-sm text-white/70">' +
                '<li><a href="discover.html" class="hover:text-gold transition-colors">Discover</a></li>' +
                '<li><a href="designers.html" class="hover:text-gold transition-colors">Designers</a></li>' +
                '<li><a href="collections.html" class="hover:text-gold transition-colors">Collections</a></li>' +
                '<li><a href="fashion-events.html" class="hover:text-gold transition-colors">Fashion Events</a></li>' +
                '<li><a href="creative-research.html" class="hover:text-gold transition-colors">Research Showcase</a></li>' +
                '<li><a href="contact.html" class="hover:text-gold transition-colors">Contact</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h3 class="font-serif text-lg text-gold mb-6">For Designers</h3>' +
              '<ul class="space-y-3 text-sm text-white/70">' +
                '<li><a href="designers.html" class="hover:text-gold transition-colors">Join as Designer</a></li>' +
                '<li><a href="custom-order.html" class="hover:text-gold transition-colors">Custom Orders</a></li>' +
                '<li><a href="b2b-market.html" class="hover:text-gold transition-colors">B2B Market</a></li>' +
                '<li><a href="fashion-events.html" class="hover:text-gold transition-colors">Submit Event</a></li>' +
                '<li><a href="creative-research.html" class="hover:text-gold transition-colors">Contribute Research</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h3 class="font-serif text-lg text-gold mb-6">Customer Support</h3>' +
              '<ul class="space-y-3 text-sm text-white/70">' +
                '<li><a href="contact.html" class="hover:text-gold transition-colors">Contact Us</a></li>' +
                '<li><a href="custom-order.html" class="hover:text-gold transition-colors">Order Tracking</a></li>' +
                '<li><a href="contact.html" class="hover:text-gold transition-colors">Size Guide</a></li>' +
                '<li><a href="contact.html" class="hover:text-gold transition-colors">Shipping Info</a></li>' +
                '<li><a href="contact.html" class="hover:text-gold transition-colors">Returns Policy</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="mt-12 pt-10 border-t border-white/10">' +
            '<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">' +
              '<div>' +
                '<h3 class="font-serif text-xl text-white mb-2">Stay Connected</h3>' +
                '<p class="text-sm text-white/60">Subscribe to our newsletter for the latest collections and events.</p>' +
              '</div>' +
              '<form id="newsletter-form" class="flex flex-col sm:flex-row gap-3" novalidate>' +
                '<div class="flex-1">' +
                  '<input type="email" id="newsletter-email" name="email" placeholder="Your email address" class="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold text-sm" required>' +
                  '<p id="newsletter-error" class="text-red-400 text-xs mt-1 hidden"></p>' +
                '</div>' +
                '<button type="submit" class="bg-gold text-black px-8 py-3 text-xs tracking-widest font-semibold hover:bg-gold/90 transition-colors whitespace-nowrap">SUBSCRIBE</button>' +
              '</form>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="bg-black py-6">' +
          '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">' +
            '<p>&copy; 2026 ORGIA.BD. All rights reserved.</p>' +
            '<div class="flex items-center gap-6">' +
              '<a href="contact.html" class="hover:text-gold transition-colors">Privacy Policy</a>' +
              '<a href="contact.html" class="hover:text-gold transition-colors">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>' +
      '<button id="back-to-top" type="button" class="fixed bottom-6 right-6 w-12 h-12 bg-gold text-black flex items-center justify-center shadow-lg hover:bg-gold/90 transition-all duration-300 opacity-0 invisible z-40" aria-label="Back to top">' +
        '<i class="fas fa-chevron-up"></i>' +
      '</button>';
  }

  document.addEventListener('DOMContentLoaded', renderFooter);
})();
