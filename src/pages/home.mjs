import { icon } from '../icons.mjs';
import { page, ambient, eyebrow, ctaBand } from '../layout.mjs';
import { heroVisual, heroStatsHtml, trusted, servicesSection, studioSection, whySection, processSection, testimonialsSection, postsSection, faqSection, contactFormSection } from '../sections.mjs';

export function home() {
  const root = '';
  const body = `
<section class="hero">${ambient}
  <div class="container hero-grid">
    <div>
      <div class="pill-row reveal">${eyebrow('Digital growth agency')}</div>
      <h1 class="h-xl hero-title reveal" style="--d:80ms" aria-label="We build growth engines that compound."><span class="w" style="--i:0">We</span> <span class="w" style="--i:1">build</span> <span class="w" style="--i:2"><span class="text-gradient">growth engines</span></span> <span class="w" style="--i:3">that</span> <span class="w" style="--i:4">compound.</span></h1>
      <p class="lead reveal" style="--d:160ms">Outreach, lead generation, search, paid media, web, apps and content — one expert team running every channel that grows your revenue.</p>
      <div class="hero-actions reveal" style="--d:240ms">
        <a class="btn btn-primary" href="contact.html">Book a strategy call ${icon('arrowUpRight')}</a>
        <a class="btn btn-ghost" href="#services"><span class="play-dot">${icon('play')}</span>Explore services</a>
      </div>
      ${heroStatsHtml()}
    </div>
    ${heroVisual()}
  </div>
</section>
${trusted()}
${servicesSection(root)}
${studioSection(root)}
${whySection()}
${processSection()}
${testimonialsSection()}
${postsSection(root, { afterBand: true })}
${faqSection(root)}
${ctaBand(root)}
${contactFormSection(root)}`;
  return page({ root, active: 'home', body, path: '' });
}
