

let books = [
    { title: "Story of My Life", author: "Fake S. Salmon", inStock: true, price: 10.25 },
    { title: "Romeo and Juliet", author: "William Shakespeare", inStock: false, price: 7.10 },
    { title: "Seven Habits of Highly Effective People", author: "Steve Covey", inStock: true, price: 18.90 }
];

// Function to Display Books
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    // Sort books alphabetically by title
    books.sort((a, b) => a.title.localeCompare(b.title));

    // Create book items
    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";

        const info = document.createElement("div");
        info.className = "info";
        info.innerHTML = `
            <strong>${book.title}</strong>
            <span>Author: ${book.author}</span>
            <span>Price: $${book.price.toFixed(2)}</span>
            <span>${book.inStock ? "In Stock" : "Sold Out"}</span>
        `;

        bookItem.appendChild(info);
        bookList.appendChild(bookItem);
    });
}

// Function to Add a New Book
function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const inStock = document.getElementById("availability").value === "true";

    // Validate input
    if (title === "" || author === "" || isNaN(price)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add new book to array
    books.push({ title, author, inStock, price });

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("availability").value = "true";

    // Update displayed book list
    displayBooks();
}

// Initial Display
displayBooks();


  