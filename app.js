import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("search");

let books = [];

async function loadBooks() {
  const querySnapshot = await getDocs(collection(db, "books"));
  books = querySnapshot.docs.map(doc => doc.data());
  displayBooks(books);
}

function displayBooks(data) {
  bookList.innerHTML = "";
  data.forEach(book => {
    bookList.innerHTML += `
      <div class="card">
        <img src="${book.coverUrl}" />
        <h4>${book.title}</h4>
        <button onclick="openBook('${book.pdfUrl}')">Read</button>
        <a href="${book.pdfUrl}" download>
          <button>Download</button>
        </a>
      </div>
    `;
  });
}

window.openBook = function(url) {
  localStorage.setItem("pdf", url);
  window.location.href = "viewer.html";
};

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(value)
  );
  displayBooks(filtered);
});

loadBooks();