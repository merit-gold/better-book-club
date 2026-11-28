(async function renderBookDetail() {
  const root = document.getElementById("book-detail-content");
  if (!root) return;
  const slug = new URLSearchParams(window.location.search).get("slug");
  const escapeHtml = value => String(value || "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  try {
    const response = await fetch("../data/books.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Book information could not be loaded.");
    const data = await response.json();
    const book = (Array.isArray(data.books) ? data.books : []).find(item => item.slug === slug);
    if (!book) { root.innerHTML = "<p class='eyebrow'>Better Book Club</p><h1>We couldn't find that book.</h1><p>Please return to the collections and choose another title.</p><a class='book-detail-cta' href='explore.html'>Explore books</a>"; return; }
    document.title = book.title + " by " + book.author + " | Better Book Club";
    const image = book.cover_url ? "<img class='book-detail-cover' src='" + escapeHtml(book.cover_url) + "' alt='Cover of " + escapeHtml(book.title) + " by " + escapeHtml(book.author) + "'>" : "";
    const badge = book.status === "past-feature" ? "Past feature" : (book.collections || []).includes("featured") ? "Featured book" : (book.collections || []).includes("worth-discovering") ? "Worth discovering" : "BBC book";
    const facts = [book.genre, book.publication_date ? "First published " + book.publication_date : "", book.series || ""].filter(Boolean);
    root.innerHTML = "<div class='book-detail-layout'><div class='book-detail-art'>" + image + "</div><div class='book-detail-copy'><p class='eyebrow'>" + escapeHtml(badge) + "</p><h1>" + escapeHtml(book.title) + "</h1><p class='book-detail-byline'>by " + escapeHtml(book.author) + "</p><p class='book-detail-facts'>" + facts.map(escapeHtml).join(" <span aria-hidden='true'>·</span> ") + "</p><div class='book-detail-description'><h2>About the book</h2><p>" + escapeHtml(book.description || "A fuller description for this title is being prepared.") + "</p></div><div class='book-detail-actions'><a class='book-detail-cta' href='" + escapeHtml(book.detail_source_url || book.source_url) + "' target='_blank' rel='noopener noreferrer'>Read more on Goodreads ↗</a>" + (book.author_url ? "<a class='book-detail-secondary' href='" + escapeHtml(book.author_url) + "' target='_blank' rel='noopener noreferrer'>Visit the author's website</a>" : "") + "</div></div></div>";
  } catch (error) { root.innerHTML = "<h1>Book details are temporarily unavailable.</h1><p>Please try again later or return to the catalogue.</p>"; console.warn("Better Book Club book detail:", error.message); }
})();
