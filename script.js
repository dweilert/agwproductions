const books = [
  {
    title: "Grey's on 51st St.",
    status: "Available now",
    format: "Graphic novel",
    genre: "Sci-fi mystery",
    price: "$25.00",
    image: "https://static.wixstatic.com/media/9f65a1_a2c3f03a777b43b09467a8f44dea9c40~mv2.jpg/v1/fill/w_900,h_900,al_c,q_90/shop-graphic.jpg",
    description:
      "A TV-obsessed amateur sleuth is pulled into a cosmic murder case after discovering aliens are secretly living in his city.",
    buyUrl: "https://www.greysdiner.com/product-page/grey-s-on-51st-st"
  },
  {
    title: "Next AGW Title",
    status: "Coming soon",
    format: "Book slot",
    genre: "TBD",
    price: "TBD",
    image: "https://static.wixstatic.com/media/9f65a1_996d87a538ac4254866a5fb584b863a9~mv2.png/v1/crop/x_0,y_69,w_1498,h_721/fill/w_900,h_432,al_c,q_90/trees.png",
    description:
      "Use this card as the template for future books, preorders, series pages, special editions, or retailer campaigns.",
    buyUrl: "#contact"
  },
  {
    title: "Series or Bundle Feature",
    status: "Planning",
    format: "Promotion",
    genre: "Multi-book",
    price: "TBD",
    image: "https://static.wixstatic.com/media/9f65a1_3772af7591cb41318a00a3a4608ae2a1~mv2.png/v1/fill/w_900,h_792,al_c,q_90/coffee%20cup.png",
    description:
      "A flexible promotional slot for signed copies, bundles, convention offers, retailer links, and newsletter-only releases.",
    buyUrl: "#contact"
  }
];

const team = [
  {
    name: "Harris Baumann",
    role: "Author",
    bio:
      "A writer and artist from Austin, TX. While writing is his greatest passion, he also enjoys drawing, watching anime, and playing board games."
  },
  {
    name: "Taylor Warren",
    role: "Artist",
    bio:
      "An illustrator and sequential artist who loves comics and graphic novels as a way to tell stories through visual and written forms."
  },
  {
    name: "Isiah Mason",
    role: "Character Designer",
    bio:
      "A character designer inspired by Shonen Jump manga, Japanese city pop, rock music, dancing, and rhythm games."
  },
  {
    name: "Beth Lindly",
    role: "Editor",
    bio:
      "A voice actor, editor, and writer from the American South who likes character-driven games, iced coffee, and her two dogs."
  },
  {
    name: "Neil Bogenrieder",
    role: "Character Designer / Graphic Designer",
    bio:
      "A Houston native and lifelong comic book fan focused on how visual and verbal storytelling can work together."
  }
];

function renderBooks() {
  const grid = document.querySelector("#book-grid");
  grid.innerHTML = books
    .map(
      (book) => `
        <article class="book-card">
          <img src="${book.image}" alt="${book.title}">
          <div class="book-card-body">
            <div class="book-meta">
              <span class="pill">${book.status}</span>
              <span class="pill">${book.format}</span>
              <span class="pill">${book.genre}</span>
            </div>
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <p><strong>${book.price}</strong></p>
            <div class="card-actions">
              <a class="button primary" href="${book.buyUrl}">${book.status === "Available now" ? "Buy Now" : "Learn More"}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTeam() {
  const grid = document.querySelector("#team-grid");
  grid.innerHTML = team
    .map(
      (member) => `
        <article class="team-card">
          <span>${member.role}</span>
          <h3>${member.name}</h3>
          <p>${member.bio}</p>
        </article>
      `
    )
    .join("");
}

document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Thanks. This signup is ready to connect to a newsletter service.");
});

renderBooks();
renderTeam();
