// Better Book Club — founder-approved book catalogue with cover-led discovery.
// Cover images link to their source/edition reference for attribution.
async function renderExploreCollections() {
  const collections = document.querySelectorAll(".explore-collection[data-collection]");
  if (!collections.length) return;
  try {
    const response = await fetch("../data/books.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Catalogue data could not be loaded.");
    const catalogue = await response.json();
    const books = Array.isArray(catalogue.books) ? catalogue.books : [];
    const selectors = {
      featured: (book) => Array.isArray(book.collections) && book.collections.includes("featured"),
      recommended: (book) => Array.isArray(book.collections) && book.collections.includes("recommended"),
      "worth-discovering": (book) => Array.isArray(book.collections) && book.collections.includes("worth-discovering"),
      "coming-soon": (book) => book.status === "coming-soon",
      "past-features": (book) => book.status === "past-feature"
    };
    collections.forEach((section) => {
      const key = section.dataset.collection;
      const matches = books.filter((book) => book && selectors[key] && selectors[key](book))
        .filter((book) => book.slug && book.title && book.author && book.source_url && book.cover_url);
      if (!matches.length) return;
      const emptyState = section.querySelector(".explore-empty-state");
      if (emptyState) emptyState.remove();
      const grid = document.createElement("div");
      grid.className = "explore-book-grid explore-book-grid-covers";
      matches.forEach((book) => {
        const article = document.createElement("article");
        article.className = "explore-book-card explore-book-card-cover";
        const coverLink = document.createElement("a");
        coverLink.className = "explore-book-cover-link";
        coverLink.href = book.source_url;
        coverLink.target = "_blank";
        coverLink.rel = "noopener noreferrer";
        coverLink.setAttribute("aria-label", "View " + book.title + " book details");
        const cover = document.createElement("img");
        cover.className = "explore-book-cover";
        cover.src = book.cover_url;
        cover.alt = "Cover of " + book.title + " by " + book.author;
        cover.loading = "lazy";
        cover.decoding = "async";
        coverLink.appendChild(cover);
        article.appendChild(coverLink);
        const meta = document.createElement("div");
        meta.className = "explore-book-meta";
        const label = document.createElement("span");
        label.className = "explore-book-label";
        label.textContent = key === "worth-discovering" ? "Worth discovering" : key === "coming-soon" ? "Coming soon" : key === "past-features" ? "Past feature" : key === "recommended" ? "Recommended" : "Featured";
        meta.appendChild(label);
        const title = document.createElement("h3"); title.className = "explore-book-title"; title.textContent = book.title; meta.appendChild(title);
        const author = document.createElement("p"); author.className = "explore-book-author"; author.textContent = "by " + book.author; meta.appendChild(author);
        if (book.publication_date) { const date = document.createElement("p"); date.className = "explore-book-detail"; date.textContent = "First published " + book.publication_date; meta.appendChild(date); }
        if (book.genre) { const genre = document.createElement("span"); genre.className = "explore-book-genre"; genre.textContent = book.genre; meta.appendChild(genre); }
        if (book.series) { const series = document.createElement("p"); series.className = "explore-book-detail"; series.textContent = book.series; meta.appendChild(series); }
        const links = document.createElement("div"); links.className = "explore-book-links";
        const source = document.createElement("a"); source.href = book.source_url; source.target = "_blank"; source.rel = "noopener noreferrer"; source.textContent = "Book details"; links.appendChild(source);
        if (book.author_url) { const authorLink = document.createElement("a"); authorLink.href = book.author_url; authorLink.target = "_blank"; authorLink.rel = "noopener noreferrer"; authorLink.textContent = "Author's website"; links.appendChild(authorLink); }
        if (book.cover_source_url) { const credit = document.createElement("a"); credit.href = book.cover_source_url; credit.target = "_blank"; credit.rel = "noopener noreferrer"; credit.textContent = "Cover source: " + (book.cover_credit || "publisher / bookseller"); links.appendChild(credit); }
        meta.appendChild(links); article.appendChild(meta); grid.appendChild(article);
      });
      if (grid.children.length) section.querySelector(".container").appendChild(grid);
    });
  } catch (error) { console.warn("Better Book Club catalogue:", error.message); }
}
renderExploreCollections();
