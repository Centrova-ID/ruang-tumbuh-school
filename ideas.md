# Ruang Tumbuh — Design Direction

## Three possible directions

### Theme Name: Paper Parade
Very Brief Intro: A bright, tactile school world with cut-paper geometry, optimistic color blocks, and candid classroom photography. It feels energetic without becoming childish.
Probability: 0.03

### Theme Name: Quiet Canopy
Very Brief Intro: A calm, nature-led direction with soft greens, generous whitespace, and a slower editorial rhythm. It positions learning as grounded, reflective growth.
Probability: 0.07

### Theme Name: Playful-Approachable
Very Brief Intro: A warm, expressive school identity that uses marigold, coral, blue, and ink navy to make learning feel social, active, and full of small discoveries. It balances parent confidence with student delight.
Probability: 0.08

## Chosen approach: Playful-Approachable

### Design Movement
Contemporary educational editorial with Swiss-inspired clarity softened by cut-paper collage, playful geometry, and documentary school photography.

### Core Principles
1. Let color carry emotion while ink navy carries trust.
2. Use mixed-size bento cards and offset compositions rather than repetitive centered sections.
3. Show real learning moments: hands making, eyes focusing, groups collaborating.
4. Make every interaction feel like a small invitation, not a hard sell.

### Color Philosophy
Warm white keeps the page breathable and parent-friendly. Ink navy anchors trust and readability. Cornflower blue creates a sense of spacious possibility, while marigold signals curiosity and coral marks moments of energy. The signature pairing is navy typography against warm white with bright color used as a purposeful highlight, never a gradient wash.

### Layout Paradigm
Bento-grid mixed-size cards, with one large narrative block paired with smaller evidence cards, occasional edge-to-edge photo panels, and offset color shapes that break the page rhythm. The home page should feel like a pinboard of active learning rather than a corporate brochure.

### Signature Elements
1. A small sunburst mark made from 8 rounded rays, used as a recurring visual cue.
2. Offset color tabs and paper-like blocks behind key content.
3. Thin navy rules and handwritten-feeling micro labels used sparingly for wayfinding.

### Interaction Philosophy
Hover states should feel tactile and immediate: cards lift by a few pixels, tabs slide a little, and buttons compress on press. Navigation should always make the next step obvious. Motion is celebratory but restrained, with staggered reveals under 300ms and reduced-motion support.

### Animation
Use opacity plus translateY for entrances, with short staggered delays. Use subtle rotate transforms on decorative paper shapes only. Buttons use scale(0.97) on press; cards use translateY(-4px) with a soft shadow on hover. Do not animate layout dimensions. Respect prefers-reduced-motion.

### Typography System
Headings: Fraunces, 600–700, for a friendly editorial voice with visible character. Body and UI: DM Sans, 400–700, for clarity and warmth. H1 is clamp(3rem, 7vw, 6.5rem), H2 clamp(2.5rem, 5vw, 4.5rem), section labels 0.75rem uppercase with letter spacing, and body copy 1rem–1.15rem with 1.6 line height.

### Brand Essence
Ruang Tumbuh is a Bandung school for curious children and thoughtful families, where project-based learning turns everyday questions into confidence and capability. Personality: curious, generous, spirited.

### Brand Voice
Headlines sound direct, warm, and specific. CTAs feel like invitations to explore, not pressure. Microcopy names the actual next step.

Example lines:
- "Pertanyaan kecil. Dunia yang terbuka lebar."
- "Lihat bagaimana anak-anak kami belajar dengan tangan, kepala, dan hati."

### Wordmark & Logo
A custom lowercase wordmark with a slightly lifted “u” and “h” rhythm, paired with an 8-ray sunburst symbol. The symbol can stand alone as the favicon and as a recurring stamp inside cards.

### Signature Brand Color
Marigold #F6B73C — warm, ownable, and visually associated with the first spark of curiosity.

## Style Decisions
- No eyebrow text above headings; section titles begin directly with the idea.
- Avoid repeated symmetrical two-column sections; alternate full-bleed imagery, bento cards, and offset narrative blocks.
- Use generated documentary photography with natural light and no logos.
- Keep corners moderately rounded (18–28px), with paper-like shadows rather than SaaS glassmorphism.
- Use Chakra-like component behavior through the existing React/Tailwind scaffold without introducing generic purple defaults.
