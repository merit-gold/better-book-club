// Homepage preview uses the same curated catalogue as Explore Books.
(async function renderHomeFeaturedBooks() {
  const grid = document.getElementById("home-featured-books");
  if (!grid) return;
  try {
    const response = await fetch("data/books.json", { cache: "no-store" });
    if (!response.ok) throw new Error("The featured collection could not be loaded.");
    const data = await response.json();
    const books = (Array.isArray(data.books) ? data.books : []).filter(book =>
      Array.isArray(book.collections) && book.collections.includes("featured") && book.title && book.author && book.cover_url
    ).slice(0, 5);
    grid.replaceChildren();
    books.forEach(book => {
      const card = document.createElement("article"); card.className = "home-featured-card";
      const link = document.createElement("a"); link.className = "home-featured-cover-link";
      link.href = "pages/book.html?slug=" + encodeURIComponent(book.slug);
      link.setAttribute("aria-label", "Read about " + book.title + " by " + book.author);
      const image = document.createElement("img"); image.className = "home-featured-cover";
      image.src = book.cover_url; image.alt = "Cover of " + book.title + " by " + book.author;
      image.loading = "lazy"; image.decoding = "async"; link.appendChild(image); card.appendChild(link);
      const title = document.createElement("h3"); const titleLink = document.createElement("a");
      titleLink.href = link.href; titleLink.textContent = book.title; title.appendChild(titleLink); card.appendChild(title);
      const author = document.createElement("p"); author.textContent = "by " + book.author; card.appendChild(author);
      grid.appendChild(card);
    });
    if (!books.length) grid.textContent = "Our first featured stories are taking shape.";
  } catch (error) { grid.textContent = "Explore the book collection to see our current discoveries."; console.warn("Better Book Club homepage:", error.message); }
})();
