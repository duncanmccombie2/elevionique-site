function App() {
  const ingredients = [
    { name: 'Vitamin D3', amount: '25 mcg', dv: '125%', benefit: 'Bone + immune support' },
    { name: 'Vitamin B12', amount: '50 mcg', dv: '2083%', benefit: 'Energy metabolism' },
    { name: 'Vitamin C', amount: '100 mg', dv: '111%', benefit: 'Antioxidant support' },
    { name: 'Calcium', amount: '300 mg', dv: '23%', benefit: 'Bone structure' },
    { name: 'Magnesium', amount: '150 mg', dv: '36%', benefit: 'Muscle + nerve function' },
  ]

  const articles = [
    'Strength training while using GLP-1 therapies',
    'High-protein nutrition guide',
    'Muscle preservation strategies',
    'Healthy metabolism tips',
  ]

  const communityImages = [
    {
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      alt: 'Fit woman smiling in a gym after a workout',
      title: 'Strength that feels good',
    },
    {
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Happy mixed group of young adults in athletic wear',
      title: 'Wellness for real life',
    },
    {
      src: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Young man and woman stretching together in a bright studio',
      title: 'Movement, energy, community',
    },
  ]

  const faqs = [
    {
      q: 'What is GLP LeanShield™?',
      a: 'A targeted daily nutrition supplement designed to support people using GLP-1 therapies as part of a healthy lifestyle.',
    },
    {
      q: 'How do I take it?',
      a: 'Take daily with food, or as directed by your healthcare professional.',
    },
    {
      q: 'Can I use it with other supplements?',
      a: 'Many people can, but it is best to review your full regimen with a healthcare professional.',
    },
    {
      q: 'How long does a bottle last?',
      a: 'One bottle is designed as a 30-day supply in this concept layout.',
    },
  ]

  const trustBadges = ['GMP Manufactured', 'Third-Party Tested', 'Made in USA']

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
  <img
    src="/elevionique-primary.svg"
    alt="Elevionique"
    className="h-24 w-auto"
  />
</div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#product" className="transition hover:text-slate-900">Product</a>
            <a href="#ingredients" className="transition hover:text-slate-900">Ingredients</a>
            <a href="#journal" className="transition hover:text-slate-900">Journal</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#shop" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
            Shop Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80"
            alt="Active diverse group of young adults training and smiling"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-slate-100" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-700 shadow-sm backdrop-blur">
                Nutritional support for people using GLP-1 therapies
              </div>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Elevionique <span className="block text-slate-600">GLP LeanShield™</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A modern supplement concept built to support lean muscle, nutrient intake, and metabolic wellness during reduced appetite.*
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#shop" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
                  Shop GLP LeanShield
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  Learn How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                {trustBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="Smiling woman" className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Smiling man" className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Smiling woman of color" className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">Built for real people pursuing optimal living</div>
                  <div className="text-sm text-slate-600">Fitness, nutrition, wellness, and sustainable healthy habits.</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 via-teal-400/20 to-lime-300/20 blur-3xl" />
              </div>
              <img
                src="/glp-leanshield.png"
                alt="Elevionique GLP LeanShield bottle"
                className="relative z-10 max-h-[560px] rounded-[2rem] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  src: 'https://images.unsplash.com/photo-1594737625785-c56c2c7b0f4d?auto=format&fit=crop&w=1200&q=80',
                  alt: 'Fit woman smiling after workout',
                  title: 'Feel Strong',
                  text: 'Support lean muscle and active lifestyles',
                },
                {
                  src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
                  alt: 'Friends exercising together',
                  title: 'Move Daily',
                  text: 'Fitness, energy and sustainable habits',
                },
                {
                  src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
                  alt: 'Healthy meal and nutrition',
                  title: 'Eat Well',
                  text: 'Balanced nutrition for optimal living',
                },
              ].map((card) => (
                <div key={card.title} className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <img src={card.src} alt={card.alt} className="h-64 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-semibold">{card.title}</div>
                    <div className="text-sm text-white/80">{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Why it matters</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                GLP-1 therapies can change how you eat. Your nutrition needs may change too.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Reduced appetite can make it harder to maintain consistent intake of key nutrients that support muscle, energy, and bone health. GLP LeanShield™ is designed as a simple daily support product within a broader optimal living routine.*
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                ['💪', 'Lean muscle support'],
                ['⚡', 'Energy metabolism'],
                ['🦴', 'Bone + mineral balance'],
                ['🛡️', 'Nutrient protection mindset'],
              ].map(([icon, text]) => (
                <div key={text} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-3xl">{icon}</div>
                  <div className="mt-4 text-lg font-medium tracking-tight">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    
    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
      Supplement Facts
    </h2>

    <p className="text-sm text-gray-600 mb-4">
      Serving Size: 2 Capsules • Servings Per Container: 30
    </p>

    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 font-semibold">Ingredient</th>
            <th className="p-3 font-semibold">Amount Per Serving</th>
            <th className="p-3 font-semibold">% Daily Value</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          <tr>
            <td className="p-3">Vitamin C (as Ascorbic Acid)</td>
            <td className="p-3">90 mg</td>
            <td className="p-3">100%</td>
          </tr>

          <tr>
            <td className="p-3">Vitamin D3 (as Cholecalciferol)</td>
            <td className="p-3">25 mcg (1,000 IU)</td>
            <td className="p-3">125%</td>
          </tr>

          <tr>
            <td className="p-3">Vitamin B12 (as Methylcobalamin)</td>
            <td className="p-3">12 mcg</td>
            <td className="p-3">500%</td>
          </tr>

          <tr>
            <td className="p-3">Biotin (Vitamin B7)</td>
            <td className="p-3">30 mcg</td>
            <td className="p-3">100%</td>
          </tr>

          <tr>
            <td className="p-3">Calcium (as Calcium Citrate)</td>
            <td className="p-3">300 mg</td>
            <td className="p-3">23%</td>
          </tr>

          <tr>
            <td className="p-3">Magnesium (as Magnesium Glycinate)</td>
            <td className="p-3">150 mg</td>
            <td className="p-3">36%</td>
          </tr>

          <tr>
            <td className="p-3">Zinc (as Zinc Picolinate)</td>
            <td className="p-3">10 mg</td>
            <td className="p-3">91%</td>
          </tr>

        </tbody>
      </table>
    </div>

    <p className="text-xs text-gray-500 mt-6">
      * These statements have not been evaluated by the Food and Drug Administration. 
      This product is not intended to diagnose, treat, cure, or prevent any disease.
    </p>

  </div>
</section>

        <section id="ingredients" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Ingredient highlights</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Clinically relevant nutrients</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                A clean, focused formula built around nutrient support priorities often discussed in the context of reduced appetite and metabolic wellness.*
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {ingredients.map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="inline-flex rounded-xl bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                    {item.name}
                  </div>
                  <div className="mt-3 text-sm text-slate-500">{item.amount} • {item.dv} DV</div>
                  <div className="mt-4 text-lg font-medium tracking-tight">{item.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Lifestyle imagery</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built for people who want to feel strong, healthy, and energized</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Add warmth and relatability to the brand with diverse, fitness-focused lifestyle imagery that reflects modern health, movement, and community.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
                <img src={communityImages[0].src} alt={communityImages[0].alt} className="h-[420px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-7 text-white">
                  <div className="text-2xl font-semibold tracking-tight">{communityImages[0].title}</div>
                  <div className="mt-2 max-w-lg text-sm text-white/85">Confident, upbeat imagery helps Elevionique feel aspirational without losing trust or relatability.</div>
                </div>
              </div>
              <div className="grid gap-5">
                {communityImages.slice(1).map((image) => (
                  <div key={image.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
                    <img src={image.src} alt={image.alt} className="h-[198px] w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5 text-white">
                      <div className="text-lg font-semibold tracking-tight">{image.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="journal" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_30px_80px_-24px_rgba(15,23,42,0.45)] lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Elevionique Journal</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Science-backed optimal living</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Build trust through educational content on training, nutrition, recovery, and metabolic wellness.
                </p>
              </div>
              <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Explore the Journal
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {articles.map((article) => (
                <div key={article} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="text-sm font-medium text-slate-100">{article}</div>
                  <div className="mt-6 text-xs uppercase tracking-[0.25em] text-sky-300">Read article</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { quote: 'The positioning feels clean, modern, and far more credible than a typical weight-loss supplement.', name: 'Early Brand Review' },
                { quote: 'A strong concept for people looking to support nutrition while using GLP-1 therapies.', name: 'Wellness Retail Feedback' },
                { quote: 'The education-first approach makes the brand feel much more trustworthy.', name: 'Launch Strategy Note' },
              ].map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="text-amber-500">★★★★★</div>
                  <p className="mt-4 text-lg leading-8 text-slate-700">“{item.quote}”</p>
                  <div className="mt-6 text-sm font-medium text-slate-900">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Why Elevionique exists</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Optimal living, built on trust</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Elevionique is a concept brand focused on science-backed nutrition, fitness, and wellness education. The aim is to help people live optimally with tools that feel modern, credible, and practical.
              </p>
            </div>
            <div id="shop" className="rounded-[2rem] bg-gradient-to-br from-blue-700 via-sky-600 to-teal-500 p-8 text-white shadow-[0_30px_80px_-24px_rgba(37,99,235,0.45)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Purchase options</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Start with GLP LeanShield™</h3>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-6 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/75">One-time purchase</div>
                  <div className="mt-4 text-4xl font-semibold">$39</div>
                  <div className="mt-3 text-sm text-white/85">Perfect for first-time customers.</div>
                </div>
                <div className="rounded-[1.5rem] bg-slate-950/25 p-6 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/75">Subscribe & save</div>
                  <div className="mt-4 text-4xl font-semibold">$34</div>
                  <div className="mt-3 text-sm text-white/85">Built for repeat customers and predictable revenue.</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">Add to Cart</button>
                <button className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">Subscribe</button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="rounded-[2rem] bg-slate-50 p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Lead capture</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get the GLP-1 Fitness & Nutrition Guide</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    Capture email subscribers with a free downloadable guide covering protein, workouts, recovery, and wellness habits.
                  </p>
                </div>
                <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                  <input type="email" placeholder="Enter your email" className="h-12 flex-1 rounded-2xl border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400" />
                  <button className="h-12 rounded-2xl bg-slate-900 px-6 text-sm font-medium text-white transition hover:bg-slate-800">Download Guide</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-medium tracking-tight text-slate-900">{item.q}</summary>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-medium text-slate-900">Elevionique</div>
            <div className="mt-1">Optimal Living</div>
          </div>
          <div className="max-w-3xl leading-6">
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
