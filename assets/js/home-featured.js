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
    ).slice(0, 4);
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


// Worth Discovering uses an editorial, story-first layout distinct from the Featured shelf.
(async function renderHomeWorthDiscovering() {
  const grid = document.getElementById("home-worth-books");
  if (!grid) return;
  try {
    const response = await fetch("data/books.json", { cache: "no-store" });
    if (!response.ok) throw new Error("The discovery collection could not be loaded.");
    const data = await response.json();
    const books = (Array.isArray(data.books) ? data.books : []).filter(book =>
      Array.isArray(book.collections) && book.collections.includes("worth-discovering") && book.slug && book.title && book.author && book.cover_url
    ).slice(0, 5);
    grid.replaceChildren();
    books.forEach((book, index) => {
      const card = document.createElement("article");
      card.className = "home-discover-card";
      const coverLink = document.createElement("a");
      coverLink.className = "home-discover-cover-link";
      coverLink.href = "pages/book.html?slug=" + encodeURIComponent(book.slug);
      coverLink.setAttribute("aria-label", "Discover " + book.title + " by " + book.author);
      const image = document.createElement("img");
      image.className = "home-discover-cover";
      image.src = book.cover_url;
      image.alt = "Cover of " + book.title + " by " + book.author;
      image.loading = "lazy";
      image.decoding = "async";
      coverLink.appendChild(image);
      const copy = document.createElement("div");
      copy.className = "home-discover-copy";
      const top = document.createElement("div");
      top.className = "home-discover-topline";
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      const tag = document.createElement("span");
      tag.textContent = "Worth discovering";
      top.append(number, tag);
      const title = document.createElement("h3");
      const titleLink = document.createElement("a");
      titleLink.href = coverLink.href;
      titleLink.textContent = book.title;
      title.appendChild(titleLink);
      const author = document.createElement("p");
      author.className = "home-discover-author";
      author.textContent = "by " + book.author;
      const details = document.createElement("p");
      details.className = "home-discover-details";
      details.textContent = [book.genre, book.series && book.series !== "Standalone" ? book.series : ""].filter(Boolean).join("  ·  ");
      const action = document.createElement("a");
      action.className = "home-discover-link";
      action.href = coverLink.href;
      action.textContent = "Meet the book  →";
      copy.append(top, title, author);
      if (details.textContent) copy.appendChild(details);
      copy.appendChild(action);
      card.append(coverLink, copy);
      grid.appendChild(card);
    });
    if (!books.length) grid.textContent = "Our next discoveries are taking shape.";
  } catch (error) {
    grid.textContent = "Explore the catalogue to see our current discoveries.";
    console.warn("Better Book Club homepage:", error.message);
  }
})();
