// Better Book Club — approved book catalogue rendering for Explore Books.
// data/books.json contains approved public catalogue entries only.
// Candidate books and internal research notes must never be added to this file.
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
      const matches = books.filter((book) => selectors[key] && selectors[key](book));
      if (!matches.length) return;

      const emptyState = section.querySelector(".explore-empty-state");
      if (emptyState) emptyState.remove();

      const grid = document.createElement("div");
      grid.className = "explore-book-grid";

      matches.forEach((book) => {
        if (!book.slug || !book.title || !book.author || !book.cover) return;

        const article = document.createElement("article");
        article.className = "explore-book-card";

        const link = document.createElement("a");
        link.href = `books/${encodeURIComponent(book.slug)}.html`;
        link.setAttribute("aria-label", `View ${book.title} by ${book.author}`);

        const cover = document.createElement("img");
        cover.className = "explore-book-cover";
        cover.src = `../${String(book.cover).replace(/^\/+/, "")}`;
        cover.alt = book.cover_alt || `Cover of ${book.title}`;
        cover.loading = "lazy";
        cover.decoding = "async";
        link.appendChild(cover);

        const meta = document.createElement("div");
        meta.className = "explore-book-meta";

        const label = document.createElement("span");
        label.className = "explore-book-label";
        label.textContent = key === "worth-discovering" ? "Worth discovering" :
          key === "coming-soon" ? "Coming soon" :
          key === "past-features" ? "Past feature" :
          key === "recommended" ? "Recommended" : "Featured";
        meta.appendChild(label);

        const title = document.createElement("h3");
        title.className = "explore-book-title";
        title.textContent = book.title;
        meta.appendChild(title);

        const author = document.createElement("p");
        author.className = "explore-book-author";
        author.textContent = `by ${book.author}`;
        meta.appendChild(author);

        if (book.genre) {
          const genre = document.createElement("span");
          genre.className = "explore-book-genre";
          genre.textContent = book.genre;
          meta.appendChild(genre);
        }

        if (book.editorial_intro) {
          const intro = document.createElement("p");
          intro.className = "explore-book-intro";
          intro.textContent = book.editorial_intro;
          meta.appendChild(intro);
        }

        link.appendChild(meta);
        article.appendChild(link);
        grid.appendChild(article);
      });

      if (grid.children.length) {
        const container = section.querySelector(".container");
        container.appendChild(grid);
      }
    });
  } catch (error) {
    // Keep the designed empty states visible if the JSON file cannot be loaded.
    console.warn("Better Book Club catalogue:", error.message);
  }
}

renderExploreCollections();
