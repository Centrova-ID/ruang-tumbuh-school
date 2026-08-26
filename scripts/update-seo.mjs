import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'client');
const site = 'https://ruangtumbuh.withcentrova.web.id';
const ogImage = `${site}/manus-storage/ruang-tumbuh-hero_d8bf4b0a.webp`;
const favicon = '/favicon.ico';
const fontLinks = '<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap"/>';
const pages = {
  'index.html': { path: '/', title: 'Ruang Tumbuh — Sekolah untuk Rasa Ingin Tahu | Centrova Portfolio', description: 'Ruang Tumbuh adalah konsep website sekolah berbasis project-based learning di Bandung, sebuah selected portfolio project oleh Centrova.' },
  'tentang/index.html': { path: '/tentang/', title: 'Tentang Ruang Tumbuh — Konsep Website Sekolah | Centrova', description: 'Kenali filosofi, sejarah, dan pendekatan Ruang Tumbuh—konsep website sekolah modern yang dirancang sebagai portfolio website oleh Centrova.' },
  'program/index.html': { path: '/program/', title: 'Program Belajar Ruang Tumbuh — Centrova Portfolio', description: 'Jelajahi program Tumbuh Awal, Sekolah Dasar, dan Sekolah Menengah dalam konsep website sekolah Ruang Tumbuh karya Centrova.' },
  'cara-belajar/index.html': { path: '/cara-belajar/', title: 'Cara Belajar di Ruang Tumbuh — Centrova Portfolio', description: 'Lihat bagaimana Ruang Tumbuh menerjemahkan rasa ingin tahu menjadi pengalaman belajar melalui konsep website sekolah karya Centrova.' },
  'cerita/index.html': { path: '/cerita/', title: 'Cerita Ruang Tumbuh — Jurnal Sekolah | Centrova', description: 'Catatan dari kebun, studio, dan ruang kelas Ruang Tumbuh dalam portfolio website editorial buatan Centrova.' },
  'cerita-kebun/index.html': { path: '/cerita-kebun/', title: 'Ketika Satu Biji Mengajarkan Kami — Ruang Tumbuh', description: 'Baca jurnal kebun Ruang Tumbuh tentang kesabaran, pengamatan, dan cara anak-anak belajar dari dunia nyata.' },
  'kontak/index.html': { path: '/kontak/', title: 'Kontak Ruang Tumbuh — Kunjungi Sekolah | Centrova', description: 'Hubungi Ruang Tumbuh untuk mengatur kunjungan sekolah. Halaman kontak dari selected portfolio project Centrova.' },
};

for (const [relative, page] of Object.entries(pages)) {
  const file = path.join(root, relative);
  const html = fs.readFileSync(file, 'utf8');
  const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: `${site}${page.path}`, isPartOf: { '@type': 'WebSite', name: 'Ruang Tumbuh', url: site }, image: ogImage, creator: { '@type': 'Organization', name: 'Centrova', url: site } };
  const head = `${fontLinks}<meta name="description" content="${page.description}"/><link rel="canonical" href="${site}${page.path}"/><meta name="robots" content="index,follow,max-image-preview:large"/><meta property="og:type" content="website"/><meta property="og:site_name" content="Centrova Portfolio"/><meta property="og:title" content="${page.title}"/><meta property="og:description" content="${page.description}"/><meta property="og:url" content="${site}${page.path}"/><meta property="og:image" content="${ogImage}"/><meta property="og:image:alt" content="Anak-anak Ruang Tumbuh berkolaborasi membuat proyek belajar"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${page.title}"/><meta name="twitter:description" content="${page.description}"/><meta name="twitter:image" content="${ogImage}"/><link rel="icon" href="${favicon}"/><script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  const cleanHtml = html.replace(/<link rel="preconnect"[^>]*\/?>(\s*)/g, '').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*\/?>(\s*)/g, '').replace(/<meta name="description"[^>]*\/?>(\s*)/g, '').replace(/<link rel="canonical"[^>]*\/?>(\s*)/g, '').replace(/<meta name="robots"[^>]*\/?>(\s*)/g, '').replace(/<meta property="og:[^"]+"[^>]*\/?>(\s*)/g, '').replace(/<meta name="twitter:[^"]+"[^>]*\/?>(\s*)/g, '').replace(/<link rel="icon"[^>]*\/?>(\s*)/g, '').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  const updated = cleanHtml.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`).replace('</head>', `${head}</head>`);
  fs.writeFileSync(file, updated);
}
