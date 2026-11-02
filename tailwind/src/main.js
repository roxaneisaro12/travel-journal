
import './style.css'

const stories = [
  {
    category: 'DESTINATIONS',
    location: 'Rwanda',
    readTime: '6 min read',
    title: 'Rwanda: Exploring the Land of a Thousand Hills',
    description:
      'From rolling green hills to lakeside towns, discover the beauty of Rwanda.',
    date: 'October 10, 2026',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
    alt: 'Lush green African landscape',
    link: './article.html',
    id: 'destinations',
  },
  {
    category: 'DESTINATIONS',
    location: 'Bali, Indonesia',
    readTime: '5 min read',
    title: "Finding Peace Among Bali's Rice Terraces",
    description:
      "Slow down and discover the quiet beauty of Bali's green landscapes.",
    date: 'October 8, 2026',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    alt: 'Tropical scenery in Bali, Indonesia',
    link: './bali.html',
  },
  {
    category: 'CULTURE',
    location: 'Italy',
    readTime: '7 min read',
    title: 'A Slow Weekend in the Italian Countryside',
    description:
      'Enjoy charming villages, local food, and the art of travelling slowly.',
    date: 'October 6, 2026',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    alt: 'Colourful Italian coastal village',
    link: './italy.html',
  },
  {
    category: 'CULTURE',
    location: 'Kyoto, Japan',
    readTime: '4 min read',
    title: "Discovering Kyoto's Quiet Streets",
    description:
      'Explore peaceful temples, traditional streets, and beautiful Japanese gardens.',
    date: 'October 4, 2026',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional architecture in Kyoto, Japan',
    link: './kyoto.html',
    id: 'culture',
  },
  {
    category: 'ADVENTURE',
    location: 'Tanzania',
    readTime: '8 min read',
    title: 'An Unforgettable Adventure in the Serengeti',
    description:
      'Discover wide-open plains, extraordinary wildlife, and the wonder of a safari.',
    date: 'October 2, 2026',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    alt: 'African wildlife and open safari landscapes',
    link: './tanzania.html',
    id: 'adventure',
  },
  {
    category: 'TRAVEL TIPS',
    location: 'Travel tips',
    readTime: '3 min read',
    title: 'How to Pack Light for Any Journey',
    description:
      'Simple packing tips to help you travel lighter and enjoy more freedom on the road.',
    date: 'September 30, 2026',
    image:
      'https://images.unsplash.com/photo-1553531384-411a247ccd73?auto=format&fit=crop&w=800&q=80',
    alt: 'Travel essentials packed for a journey',
    link: './travel-tips.html',
    id: 'travel-tips',
  },
]

const authorImage =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'

const storyCards = stories
  .map(
    (story) => `
      <article
        class="group overflow-hidden bg-white"
        ${story.id ? `id="${story.id}"` : ''}
      >
        <a
          href="${story.link}"
          class="relative block aspect-[4/3] overflow-hidden bg-roam-soft-green"
          aria-label="Read ${story.title}"
        >
          <img
            src="${story.image}"
            alt="${story.alt}"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >

          <span class="absolute bottom-4 left-4 bg-roam-cream px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-roam-dark-olive">
            ${story.category}
          </span>
        </a>

        <div class="py-5">
          <div class="mb-3 flex items-center justify-between gap-3 text-xs text-roam-muted">
            <span>${story.location}</span>
            <span>${story.readTime}</span>
          </div>

          <h3 class="mb-3 font-heading text-2xl leading-snug text-roam-charcoal">
            <a href="${story.link}" class="transition-colors hover:text-roam-olive">
              ${story.title}
            </a>
          </h3>

          <p class="mb-5 text-sm leading-7 text-roam-muted">
            ${story.description}
          </p>

          <div class="flex items-center gap-3 border-t border-roam-border pt-4">
            <img
              src="${authorImage}"
              alt=""
              loading="lazy"
              class="h-10 w-10 rounded-full object-cover"
            >

            <div>
              <p class="text-sm font-semibold text-roam-charcoal">Amara N.</p>
              <p class="mt-1 text-xs text-roam-muted">${story.date}</p>
            </div>
          </div>
        </div>
      </article>
    `,
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <header class="sticky top-0 z-50 border-b border-roam-border bg-roam-cream/95">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      aria-label="Main navigation"
    >
      <a
        href="./"
        class="font-heading text-3xl font-bold tracking-tight text-roam-charcoal"
        aria-label="ROAM home"
      >
        ROAM<span class="text-roam-olive">.</span>
      </a>

      <div class="hidden items-center gap-8 text-sm text-roam-charcoal md:flex">
        <a href="./" class="transition-colors hover:text-roam-olive">Home</a>
        <a href="#stories" class="transition-colors hover:text-roam-olive">Destinations</a>
        <a href="#travel-tips" class="transition-colors hover:text-roam-olive">Travel Tips</a>
        <a href="#about" class="transition-colors hover:text-roam-olive">About</a>
      </div>

      <a
        href="#stories"
        class="border border-roam-olive px-5 py-3 text-xs font-semibold tracking-wide text-roam-dark-olive transition-colors hover:bg-roam-olive hover:text-white"
      >
        Explore Stories
      </a>
    </nav>
  </header>

  <main>
    <section
      class="relative flex min-h-[560px] items-center overflow-hidden bg-roam-dark-olive px-6 py-24 text-white lg:min-h-[650px] lg:px-10"
      aria-labelledby="hero-title"
    >
      <img
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      >

      <div class="absolute inset-0 bg-roam-charcoal/55"></div>

      <div class="relative mx-auto w-full max-w-7xl">
        <div class="max-w-2xl">
          <p class="mb-6 text-xs font-semibold tracking-[0.3em] text-white/80">
            THE WORLD IS WAITING
          </p>

          <h1
            id="hero-title"
            class="mb-7 font-heading text-5xl leading-tight sm:text-6xl lg:text-7xl"
          >
            Find your next<br>
            great escape.
          </h1>

          <p class="mb-9 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Stories, places, and experiences to inspire you
            to travel a little further and see the world differently.
          </p>

          <a
            href="#stories"
            class="inline-flex items-center gap-4 bg-roam-cream px-7 py-4 text-sm font-semibold text-roam-dark-olive transition-colors hover:bg-white"
          >
            Discover our stories
            <span aria-hidden="true" class="text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <section
      id="stories"
      class="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-10 lg:py-28"
      aria-labelledby="stories-title"
    >
      <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p class="mb-4 text-xs font-semibold tracking-[0.25em] text-roam-olive">
            THE ROAM JOURNAL
          </p>

          <h2
            id="stories-title"
            class="font-heading text-4xl leading-tight text-roam-charcoal sm:text-5xl"
          >
            Stories worth travelling for.
          </h2>
        </div>

        <p class="max-w-sm text-sm leading-7 text-roam-muted">
          Thoughtful guides and personal stories to inspire
          your next adventure.
        </p>
      </div>

      <nav
        class="mb-10 flex flex-wrap gap-x-7 gap-y-4 border-b border-roam-border pb-5 text-sm"
        aria-label="Story categories"
      >
        <a href="#stories" class="border-b-2 border-roam-olive pb-2 font-semibold text-roam-dark-olive">
          All stories
        </a>

        <a href="#destinations" class="text-roam-muted transition-colors hover:text-roam-olive">
          Destinations
        </a>

        <a href="#adventure" class="text-roam-muted transition-colors hover:text-roam-olive">
          Adventure
        </a>

        <a href="#culture" class="text-roam-muted transition-colors hover:text-roam-olive">
          Culture
        </a>

        <a href="#travel-tips" class="text-roam-muted transition-colors hover:text-roam-olive">
          Travel tips
        </a>
      </nav>

      <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        ${storyCards}
      </div>
    </section>

    <section
      id="about"
      class="scroll-mt-24 bg-roam-soft-green px-6 py-20 lg:px-10 lg:py-28"
    >
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-5 text-xs font-semibold tracking-[0.25em] text-roam-olive">
          A NOTE FROM ROAM
        </p>

        <h2 class="mb-7 font-heading text-4xl leading-tight text-roam-charcoal sm:text-5xl">
          The best journeys stay with you.
        </h2>

        <p class="mx-auto mb-8 max-w-2xl text-base leading-8 text-roam-muted">
          ROAM is a travel journal for curious people who want
          to experience places thoughtfully. We share personal
          stories, practical guides, and inspiration for seeing
          the world at your own pace.
        </p>

        <a
          href="#stories"
          class="inline-flex items-center gap-3 border-b border-roam-olive pb-2 text-sm font-semibold text-roam-dark-olive transition-colors hover:text-roam-olive"
        >
          Find your next story
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  </main>

  <footer class="bg-roam-charcoal px-6 py-10 text-white lg:px-10">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <a href="./" class="font-heading text-3xl font-bold tracking-tight">
        ROAM<span class="text-roam-sand">.</span>
      </a>

      <p class="text-sm text-white/70">
        Stories for the curious traveller.
      </p>

      <p class="text-xs text-white/60">
        &copy; 2026 ROAM Travel Journal. All rights reserved.
      </p>
    </div>
  </footer>
`

