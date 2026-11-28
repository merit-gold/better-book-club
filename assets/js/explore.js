// BBC cover-led collection cards link to an on-site book profile first.
async function renderExploreCollections() {
  const sections = document.querySelectorAll(".explore-collection[data-collection]");
  if (!sections.length) return;
  try {
    const response = await fetch("../data/books.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Catalogue data could not be loaded.");
    const catalogue = await response.json();
    const books = Array.isArray(catalogue.books) ? catalogue.books : [];
    const selectors = {
      featured: book => Array.isArray(book.collections) && book.collections.includes("featured"),
      recommended: book => Array.isArray(book.collections) && book.collections.includes("recommended"),
      "worth-discovering": book => Array.isArray(book.collections) && book.collections.includes("worth-discovering"),
      "coming-soon": book => book.status === "coming-soon",
      "past-features": book => book.status === "past-feature"
    };
    sections.forEach(section => {
      const key = section.dataset.collection;
      const matches = books.filter(book => book && selectors[key] && selectors[key](book))
        .filter(book => book.slug && book.title && book.author && book.cover_url);
      const emptyState = section.querySelector(".explore-empty-state");
      if (!matches.length) {
        if (emptyState) emptyState.hidden = false;
        return;
      }
      if (emptyState) emptyState.remove();
      const grid = document.createElement("div");
      grid.className = "explore-book-grid explore-book-grid-covers";
      matches.forEach(book => {
        const article = document.createElement("article");
        article.className = "explore-book-card explore-book-card-cover";
        const coverLink = document.createElement("a");
        coverLink.className = "explore-book-cover-link";
        coverLink.href = "book.html?slug=" + encodeURIComponent(book.slug);
        coverLink.setAttribute("aria-label", "Read about " + book.title + " by " + book.author);
        const cover = document.createElement("img");
        cover.className = "explore-book-cover";
        cover.src = book.cover_url;
        cover.alt = "Cover of " + book.title + " by " + book.author;
        cover.loading = "lazy"; cover.decoding = "async";
        coverLink.appendChild(cover); article.appendChild(coverLink);
        const meta = document.createElement("div"); meta.className = "explore-book-meta";
        const label = document.createElement("span"); label.className = "explore-book-label";
        label.textContent = key === "worth-discovering" ? "Worth discovering" : key === "coming-soon" ? "Coming soon" : key === "past-features" ? "Past feature" : key === "recommended" ? "Recommended" : "Featured";
        meta.appendChild(label);
        const title = document.createElement("h3"); title.className = "explore-book-title";
        const titleLink = document.createElement("a"); titleLink.href = coverLink.href; titleLink.textContent = book.title;
        title.appendChild(titleLink); meta.appendChild(title);
        const author = document.createElement("p"); author.className = "explore-book-author"; author.textContent = "by " + book.author; meta.appendChild(author);
        if (book.genre) { const genre = document.createElement("span"); genre.className = "explore-book-genre"; genre.textContent = book.genre; meta.appendChild(genre); }
        const more = document.createElement("a"); more.className = "explore-book-read-more"; more.href = coverLink.href; more.textContent = "Discover this book"; meta.appendChild(more);
        article.appendChild(meta); grid.appendChild(article);
      });
      section.querySelector(".container").appendChild(grid);
    });
  } catch (error) { console.warn("Better Book Club catalogue:", error.message); }
}
renderExploreCollections();
