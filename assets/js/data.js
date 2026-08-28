/* ORGIA.BD — Shared Data */
const ORGIA_DATA = {
  nav: [
    { label: 'DISCOVER', href: 'discover.html', key: 'discover' },
    { label: 'DESIGNER', href: 'designers.html', key: 'designers' },
    { label: 'COLLECTION', href: 'collections.html', key: 'collections' },
    { label: 'CUSTOM ORDER', href: 'custom-order.html', key: 'custom-order' },
    { label: 'B2B MARKET', href: 'b2b-market.html', key: 'b2b-market' },
    { label: 'FASHION EVENT', href: 'fashion-events.html', key: 'fashion-events' },
    { label: 'CREATIVE RESEARCH SHOWCASE', href: 'creative-research.html', key: 'creative-research' }
  ],

  heroSlides: [
    {
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80',
      alt: 'Bangladeshi designer in embroidered black and gold traditional attire',
      eyebrow: 'DISCOVER',
      title: 'Bangladesh. Designers. Culture. You.',
      subtitle: 'ORGIA.BD is the home of Bangladeshi fashion, connecting designers, craftsmanship and global opportunities.',
      cta1: { text: 'EXPLORE COLLECTIONS', href: 'collections.html' },
      cta2: { text: 'BECOME A DESIGNER', href: 'designers.html' }
    },
    {
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=80',
      alt: 'Elegant bridal fashion editorial portrait',
      eyebrow: 'COLLECTION',
      title: 'Heritage Woven Into Every Thread',
      subtitle: 'Explore curated collections celebrating Bangladeshi craftsmanship and contemporary design.',
      cta1: { text: 'VIEW COLLECTIONS', href: 'collections.html' },
      cta2: { text: 'CUSTOM ORDER', href: 'custom-order.html' }
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
      alt: 'Artisan working on traditional textile embroidery',
      eyebrow: 'CRAFT',
      title: 'Where Tradition Meets Innovation',
      subtitle: 'Discover the artisans and designers shaping the future of Bangladeshi fashion.',
      cta1: { text: 'MEET DESIGNERS', href: 'designers.html' },
      cta2: { text: 'RESEARCH SHOWCASE', href: 'creative-research.html' }
    },
    {
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80',
      alt: 'Fashion runway show with models in designer wear',
      eyebrow: 'EVENTS',
      title: 'Experience Fashion Live',
      subtitle: 'Join exclusive fashion events celebrating Bangladeshi design on the global stage.',
      cta1: { text: 'UPCOMING EVENTS', href: 'fashion-events.html' },
      cta2: { text: 'B2B MARKET', href: 'b2b-market.html' }
    }
  ],

  discoverValues: [
    { icon: 'fa-seedling', title: 'Traditional Craft', tagline: 'Timeless Heritage' },
    { icon: 'fa-user-tie', title: 'Designer Talent', tagline: 'Creative Excellence' },
    { icon: 'fa-gem', title: 'Premium Quality', tagline: 'Luxury Standards' },
    { icon: 'fa-hand-holding-heart', title: 'Ethical Fashion', tagline: 'Sustainable Values' },
    { icon: 'fa-globe', title: 'Global Reach', tagline: 'Worldwide Access' }
  ],

  designers: [
    { id: 1, name: 'Rima Sultana', category: 'Contemporary Wear', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80', specialty: 'Contemporary fusion with traditional motifs' },
    { id: 2, name: 'Arif Rahman', category: 'Menswear', location: 'Chittagong', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', specialty: 'Modern menswear with heritage fabrics' },
    { id: 3, name: 'Nusrat Jahan', category: 'Luxury Pret', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80', specialty: 'Luxury pret with hand-embroidered details' },
    { id: 4, name: 'Tanvir Ahmed', category: 'Bridal', location: 'Sylhet', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', specialty: 'Bridal couture and ceremonial wear' },
    { id: 5, name: 'Farhana Islam', category: 'Sustainable', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80', specialty: 'Eco-conscious fashion with natural dyes' },
    { id: 6, name: 'Kamal Hossain', category: 'Menswear', location: 'Rajshahi', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80', specialty: 'Handloom menswear and formal attire' },
    { id: 7, name: 'Sabrina Chowdhury', category: 'Festive', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', specialty: 'Festive collections with jamdani weaving' },
    { id: 8, name: 'Imran Kabir', category: 'Limited Edition', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80', specialty: 'Limited edition avant-garde pieces' },
    { id: 9, name: 'Mehjabin Akter', category: 'Bridal', location: 'Khulna', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80', specialty: 'Royal bridal ensembles' },
    { id: 10, name: 'Rafiqul Islam', category: 'Menswear', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', specialty: 'Panjabi and sherwani collections' },
    { id: 11, name: 'Lamia Karim', category: 'Contemporary Wear', location: 'Dhaka', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', specialty: 'Contemporary silhouettes with artisan textiles' },
    { id: 12, name: 'Shahidul Alam', category: 'Luxury Pret', location: 'Chittagong', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', specialty: 'Luxury pret for discerning clientele' }
  ],

  collections: [
    { id: 1, title: 'FESTIVE', category: 'Festive', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', designer: 'Sabrina Chowdhury', pieces: 24 },
    { id: 2, title: 'PRET', category: 'Pret', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', designer: 'Nusrat Jahan', pieces: 18 },
    { id: 3, title: 'BRIDAL', category: 'Bridal', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', designer: 'Tanvir Ahmed', pieces: 12 },
    { id: 4, title: 'MENSWEAR', category: 'Menswear', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80', designer: 'Arif Rahman', pieces: 20 },
    { id: 5, title: 'LUXURY', category: 'Luxury', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', designer: 'Imran Kabir', pieces: 8 },
    { id: 6, title: 'LIMITED EDITION', category: 'Limited Edition', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', designer: 'Rima Sultana', pieces: 6 }
  ],

  events: [
    { id: 1, title: 'Dhaka Fashion Week 2026', date: '24 MAY 2026', location: 'Dhaka, Bangladesh', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', status: 'upcoming', type: 'Runway' },
    { id: 2, title: 'Heritage Textile Symposium', date: '12 JUN 2026', location: 'Chittagong, Bangladesh', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', status: 'upcoming', type: 'Conference' },
    { id: 3, title: 'Bridal Couture Showcase', date: '08 JUL 2026', location: 'Dhaka, Bangladesh', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', status: 'upcoming', type: 'Showcase' },
    { id: 4, title: 'Sustainable Fashion Forum', date: '15 FEB 2026', location: 'Dhaka, Bangladesh', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', status: 'past', type: 'Forum' },
    { id: 5, title: 'Artisan Craft Exhibition', date: '20 JAN 2026', location: 'Sylhet, Bangladesh', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80', status: 'past', type: 'Exhibition' },
    { id: 6, title: 'Global Fashion Connect', date: '05 DEC 2025', location: 'Dhaka, Bangladesh', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', status: 'past', type: 'Networking' }
  ],

  research: [
    { id: 1, title: 'The Art of Jamdani Weaving', category: 'Textile', author: 'Dr. Ayesha Begum', date: 'March 15, 2026', readTime: '8 min', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', excerpt: 'Exploring the centuries-old jamdani weaving tradition of Dhaka and its revival in contemporary fashion.' },
    { id: 2, title: 'Muslin: The Lost Fabric of Bengal', category: 'History', author: 'Prof. Kamaluddin', date: 'February 28, 2026', readTime: '12 min', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80', excerpt: 'A deep dive into the legendary muslin fabric that once defined Bengal\'s textile supremacy.' },
    { id: 3, title: 'Nakshi Kantha: Stories in Stitches', category: 'Craft', author: 'Rashida Akter', date: 'February 10, 2026', readTime: '6 min', image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80', excerpt: 'How rural women artisans preserve cultural narratives through the ancient art of nakshi kantha embroidery.' },
    { id: 4, title: 'Sustainable Dyes of Bangladesh', category: 'Sustainability', author: 'Farhana Islam', date: 'January 22, 2026', readTime: '7 min', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', excerpt: 'Natural dyeing techniques using indigenous plants and their role in eco-conscious fashion.' },
    { id: 5, title: 'Fashion in Mughal Bengal', category: 'Culture', author: 'Dr. Shahidul Haque', date: 'January 5, 2026', readTime: '10 min', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', excerpt: 'Tracing the influence of Mughal aesthetics on Bengali clothing and textile traditions.' },
    { id: 6, title: 'Digital Fashion Innovation', category: 'Innovation', author: 'Tanvir Ahmed', date: 'December 18, 2025', readTime: '5 min', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', excerpt: 'How Bangladeshi designers are embracing technology to reach global audiences.' },
    { id: 7, title: 'Contemporary Bengali Silhouettes', category: 'Design', author: 'Rima Sultana', date: 'December 1, 2025', readTime: '9 min', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', excerpt: 'Reimagining traditional Bengali garments for the modern wardrobe.' },
    { id: 8, title: 'Handloom Revival Movement', category: 'Craft', author: 'Kamal Hossain', date: 'November 20, 2025', readTime: '8 min', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80', excerpt: 'The grassroots movement bringing handloom weaving back to mainstream fashion.' }
  ],

  manufacturers: [
    { id: 1, name: 'Dhaka Textile Mills', category: 'Woven Fabrics', location: 'Dhaka', capacity: '50,000 units/month', image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80', rating: 4.8 },
    { id: 2, name: 'Heritage Garments Ltd.', category: 'Ready-to-Wear', location: 'Gazipur', capacity: '100,000 units/month', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', rating: 4.9 },
    { id: 3, name: 'Artisan Embroidery House', category: 'Embroidery', location: 'Narayanganj', capacity: '20,000 units/month', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', rating: 4.7 },
    { id: 4, name: 'Green Thread Factory', category: 'Sustainable', location: 'Chittagong', capacity: '30,000 units/month', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80', rating: 4.6 },
    { id: 5, name: 'Premium Knitwear Co.', category: 'Knitwear', location: 'Dhaka', capacity: '75,000 units/month', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', rating: 4.8 },
    { id: 6, name: 'Royal Dyeing Works', category: 'Dyeing & Finishing', location: 'Savar', capacity: '40,000 units/month', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80', rating: 4.5 }
  ],

  stats: [
    { icon: 'fa-palette', number: '100+', label: 'DESIGNERS' },
    { icon: 'fa-layer-group', number: '500+', label: 'COLLECTIONS' },
    { icon: 'fa-users', number: '10K+', label: 'CUSTOMERS' },
    { icon: 'fa-industry', number: '200+', label: 'MANUFACTURERS' },
    { icon: 'fa-calendar-check', number: '50+', label: 'EVENTS' },
    { icon: 'fa-globe-asia', number: '1', label: 'VISION: GLOBAL FASHION HUB FROM BANGLADESH' }
  ]
};
