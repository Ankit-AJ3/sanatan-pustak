const collections = [
  {
    title: "वेद",
    description: "The eternal knowledge",
    count: "4 texts",
    mark: "01",
  },
  {
    title: "उपनिषद",
    description: "Questions of the self",
    count: "13 texts",
    mark: "02",
  },
  {
    title: "इतिहास",
    description: "Stories that endure",
    count: "6 texts",
    mark: "03",
  },
  {
    title: "स्तोत्र",
    description: "Verses for every day",
    count: "28 texts",
    mark: "04",
  },
];

const page = () => {
  return (
    <main className="library-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sanatan Pustak home">
          <span className="brand-mark">ॐ</span>
          <span>
            <strong>Sanatan</strong>
            <small>Pustak</small>
          </span>
        </a>
        <div className="nav-links">
          <a className="active" href="#library">
            The library
          </a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
        </div>
        <button
          className="profile-button"
          type="button"
          aria-label="Open profile"
        >
          AK
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> A living archive of Indian wisdom
          </p>
          <h1>
            Read what
            <br />
            <em>remains.</em>
          </h1>
          <p className="hero-description">
            Ancient words, kept close. Explore scripture, philosophy, and poetry
            in one quiet place.
          </p>
          <form className="search-box" action="#library">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <label className="sr-only" htmlFor="library-search">
              Search the library
            </label>
            <input
              id="library-search"
              name="query"
              type="search"
              placeholder="Search by text, author, or idea"
            />
            <button type="submit">Search</button>
          </form>
          <div className="hero-notes">
            <span>
              <b>52</b> texts in the archive
            </span>
            <span>
              <b>08</b> languages
            </span>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Decorative illustration of a palm leaf manuscript"
        >
          <div className="sun-disc" />
          <div className="art-caption">
            ज्ञानं परमं
            <br />
            <span>Knowledge is the highest</span>
          </div>
          <div className="manuscript">
            <div className="manuscript-lines" />
            <span className="manuscript-script">श्रीमद्भगवद्गीता</span>
            <span className="manuscript-page">01 / 18</span>
          </div>
          <span className="art-stamp">
            Est.
            <br />
            2024
          </span>
        </div>
      </section>

      <section className="library-section" id="library">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Begin here
            </p>
            <h2>Featured text</h2>
          </div>
          <a className="text-link" href="#collections">
            View all texts <span>↗</span>
          </a>
        </div>
        <article className="featured-book">
          <div className="book-index">01</div>
          <div className="book-title">
            <p className="book-language">Sanskrit · 18 chapters</p>
            <h3>
              Bhagavad
              <br />
              <em>Gita</em>
            </h3>
          </div>
          <p className="book-quote">
            “You have a right to perform your prescribed duties, but you are not
            entitled to the fruits of your actions.”
          </p>
          <a className="read-button" href="#read">
            Begin reading <span>→</span>
          </a>
        </article>
      </section>

      <section className="collections-section" id="collections">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">
              <span /> Browse by tradition
            </p>
            <h2>Find your thread</h2>
          </div>
          <p className="section-aside">
            A small doorway into a very large world.
          </p>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <a
              className="collection-item"
              href="#library"
              key={collection.mark}
            >
              <span className="collection-mark">{collection.mark}</span>
              <span className="collection-content">
                <strong>{collection.title}</strong>
                <small>{collection.description}</small>
              </span>
              <span className="collection-count">{collection.count}</span>
              <span className="collection-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer" id="about">
        <span>ॐ &nbsp; Read slowly. Return often.</span>
        <span>
          Made for the curious mind <b>·</b> 2024
        </span>
      </footer>
    </main>
  );
};

export default page;
