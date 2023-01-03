export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static displayBooks() {
    const books = Book.getBooksFromStore();
    books.forEach((book) => Book.addBookToList(book));
  }

  static addBookToList(book) {
    const listContainer = document.getElementById('list-container');
    const singleBook = document.createElement('tr');
    singleBook.innerHTML = `
        <td>"${book.title}" by ${book.author}</td>
        <td><button class="delete">Remove</button></td>
        `;
    listContainer.appendChild(singleBook);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  static getBooksFromStore() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBookToStore(book) {
    const books = Book.getBooksFromStore();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookFromList(author) {
    const books = Book.getBooksFromStore();
    let index = 0;
    books.filter((book) => {
      if (book.author !== author) { index = +1; }
      return books;
    });
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
