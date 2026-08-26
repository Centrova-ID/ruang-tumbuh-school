import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'client');
const site = 'https://ruangtumbuh.withcentrova.web.id';
const ogImage = 'https://raw.githubusercontent.com/Centrova-ID/ruang-tumbuh-school/main/client/public/assets/ruang-tumbuh/ruang-tumbuh-hero.webp';
const favicon = '/favicon.ico';
const fontLinks = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap">',
].join('\n    ');

const pages = {
  'index.html': { path: '/', title: 'Ruang Tumbuh — Sekolah untuk Rasa Ingin Tahu | Centrova Portfolio', description: 'Ruang Tumbuh adalah konsep website sekolah berbasis project-based learning di Bandung, sebuah selected portfolio project oleh Centrova.' },
  'tentang/index.html': { path: '/tentang/', title: 'Tentang Ruang Tumbuh — Sekolah untuk Rasa Ingin Tahu | Centrova', description: 'Kenali filosofi, budaya, dan orang-orang di balik Ruang Tumbuh, konsep website sekolah dalam portfolio Centrova.' },
  'program/index.html': { path: '/program/', title: 'Program Ruang Tumbuh — Belajar Lewat Proyek | Centrova', description: 'Lihat program belajar Ruang Tumbuh dari jenjang awal hingga remaja, dirancang untuk rasa ingin tahu dan proyek nyata.' },
  'cara-belajar/index.html': { path: '/cara-belajar/', title: 'Cara Belajar di Ruang Tumbuh — Project-Based Learning | Centrova', description: 'Pelajari cara Ruang Tumbuh membangun pembelajaran yang aktif, reflektif, dan dekat dengan kehidupan sehari-hari.' },
  'cerita/index.html': { path: '/cerita/', title: 'Cerita Ruang Tumbuh — Jurnal Sekolah | Centrova', description: 'Baca catatan dan cerita dari proses belajar di Ruang Tumbuh, sebuah konsep website sekolah oleh Centrova.' },
  'cerita-kebun/index.html': { path: '/cerita-kebun/', title: 'Ketika Satu Biji Mengajarkan Kami tentang Kesabaran | Ruang Tumbuh', description: 'Jurnal kebun Ruang Tumbuh tentang kesabaran, pengamatan, dan proses belajar dari satu biji kecil.' },
  'kontak/index.html': { path: '/kontak/', title: 'Kontak Ruang Tumbuh — Kunjungi Sekolah | Centrova', description: 'Hubungi Ruang Tumbuh dan rencanakan kunjungan untuk mengenal pendekatan belajar berbasis proyek.' },
};

for (const [relative, page] of Object.entries(pages)) {
  const file = path.join(root, relative);
  const html = fs.readFileSync(file, 'utf8');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${site}${page.path}`,
    isPartOf: { '@type': 'WebSite', name: 'Ruang Tumbuh', url: site },
    image: ogImage,
    creator: { '@type': 'Organization', name: 'Centrova', url: 'https://www.centrova.id' },
  };
  const head = `${fontLinks}
    <meta name="description" content="${page.description}">
    <link rel="canonical" href="${site}${page.path}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Centrova Portfolio">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${site}${page.path}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:alt" content="Anak-anak Ruang Tumbuh berkolaborasi membuat proyek belajar">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${ogImage}">
    <link rel="icon" href="${favicon}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  const updated = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<\/title>[\s\S]*?<\/head>/, `</title>\n    ${head}\n  </head>`);
  fs.writeFileSync(file, updated);
}
